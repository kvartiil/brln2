import { Field, FieldType, JsonForm, Question, QuestionType, Text } from './jsonform.model';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { atLeastOneCheckboxCheckedValidator } from './atLeastOneCheckboxCheckedValidator';
import { JsonAnswer } from './jsonanswers.model';
import { CustomValidation } from './common/validation.util';

@Component({
  selector: 'lib-form-generator',
  styleUrls: ['./form-generator.component.scss'],
  templateUrl: './form-generator.component.html'
})
export class FormGeneratorComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup = this.fb.group({});

  @Input()
  set form(jsonForm: JsonForm) {
    this.jsonForm$.next(jsonForm);
  }

  @Input()
  set answers(answer: JsonAnswer) {
    this.formAnswers$.next(answer);
  }

  @Input()
  set language(lang: string) {
    this.lang$.next(lang);
  }

  @Input() set error(error: boolean) {
    this.showError$.next(error);
  }

  @Input() set success(success: boolean) {
    this.showSuccess$.next(success);
  }

  @Output() toggleCancel = new EventEmitter<boolean>();
  @Output() answersForm = new EventEmitter<any>();


  private currentLang: string = 'et';
  private componentDestroyed$ = new Subject();
  private showError$ = new BehaviorSubject<boolean>(false);
  private showSuccess$ = new BehaviorSubject<boolean>(false);
  private lang$ = new BehaviorSubject<string>('et');
  private jsonForm$ = new BehaviorSubject<any>({});
  private formAnswers$ = new BehaviorSubject<any>({});
  private invalid = [];
  jsonForm: JsonForm;
  formAnswers: JsonAnswer;
  QuestionType = QuestionType;
  FieldType = FieldType;
  isSubmitted: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }

  ngOnInit(): void {
    this.setFeedbackAlerts();

    combineLatest([
      this.jsonForm$,
      this.formAnswers$,
      this.lang$
    ]).pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(([jsonForm, formAnswers, lang]) => {
      this.currentLang = lang;
      this.formAnswers = formAnswers
      if (this.jsonForm != jsonForm) {
        this.jsonForm = jsonForm;
        this.jsonForm?.sections.forEach(section => this.createFormRecursive(section?.questions))
      }
    });
  }

  private setFeedbackAlerts() {
    this.showError$.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(value => this.showErrorMessage = value);

    this.showSuccess$.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(value => this.showSuccessMessage = value);
  }

  getTextLang(text: Text): string {
    if (text) {
      switch (this.currentLang) {
        case 'en':
          return text.en ? text.en : text.et;
          break;
        case 'ru':
          return text.ru ? text.ru : text.et;
          break;
        default:
          return text.et ? text.et : '';
          break;
      }
    }
    return '';
  }

  createFormRecursive(questions: Question[]) {
    for (const question of questions) {
      if (question.type == QuestionType.FIELDSET) {
        this.createForFieldSet(question?.fields, question?.required, question?.id)
      } else {
        const validatorsToAdd = [];
        if (question.required) {
          validatorsToAdd.push(Validators.required);
        }

        question.enteredValue = this.findFromAnswers(question.id);

        this.formGroup.addControl(
          question.id,
          this.fb.control(question.enteredValue, validatorsToAdd)
        );
        for (const field of question.fields) {
          if (field?.fields) {
            this.createForFieldSet(field.fields, false);
          }
        }
      }
      if (question?.questions) {
        this.createFormRecursive(question.questions)
      }
    }
  }

  createForFieldSet(fields: Field[], parentRequired: boolean, parentId?: string) {
    const checkBoxFields = fields.filter(field => field.type == FieldType.CHECKBOX);
    const nonCheckBoxFields = fields.filter(field => field.type != FieldType.CHECKBOX);

    if (checkBoxFields.length > 0) {
      this.formGroup.addControl(
        parentId,
        this.buildCategoryFormGroup(parentRequired, checkBoxFields)
      )
    }
    this.createNonCheckBoxFields(nonCheckBoxFields);

    for (const field of fields) {
      if (field?.fields) {
        this.createForFieldSet(field.fields, false);
      }
    }
  }


  private createNonCheckBoxFields(nonCheckBoxFields: Field[]) {
    for (const field of nonCheckBoxFields) {
      const validatorsToAdd = [];

      if (field.type != FieldType.CHECKBOX && field.required) {
        validatorsToAdd.push(Validators.required);
      }
      if (field.type == FieldType.NUMBER) {
        validatorsToAdd.push(Validators.pattern('^[0-9]*$'))
      }

      if (field.maxLength) {
        validatorsToAdd.push(Validators.maxLength(field.maxLength))
      }
      if (field.type == FieldType.EMAIL) {
        validatorsToAdd.push(CustomValidation.email());
      }

      field.enteredValue = this.findFromAnswers(field.id);

      if (field.enteredValue == null) field.enteredValue = undefined;
      this.formGroup.addControl(
        field.id,
        this.fb.control(field.enteredValue, validatorsToAdd)
      );
    }
  }

  private findFromAnswers(id: string): any {
    const found = this.formAnswers?.answer_data.find((obj) => {
      return obj.id === id;
    });
    if (found?.value) {
      return found.value;
    }
  }

  private buildCategoryFormGroup(parentRequired: boolean, fields: Field[]): FormGroup {
    let group = this.fb.group({}, {
      validators: atLeastOneCheckboxCheckedValidator()
    });
    fields.forEach(field => {
      field.enteredValue = this.setCheckBoxField(field);

      group.addControl(field.id, this.fb.control(field.enteredValue));
    })
    return group;
  }


  private setCheckBoxField(field: Field): boolean {
    let value;
    field.enteredValue = this.findFromAnswers(field.id);
    if (field.enteredValue === null || field.enteredValue == 'false') {
      value = false
    } else if (field.enteredValue == 'true') {
      value = true;
    }
    return value;
  }

  private findInvalidControls() {
    this.invalid = [];
    const controls = this.formGroup.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        this.invalid.push(name);
      }
    }
    return this.invalid;
  }

  onFormSubmit() {
    this.isSubmitted = true;
    this.findInvalidControls();
    let shownAndInvalid = this.createShownAndInvalidList();
    if (shownAndInvalid.length > 0) {
      this.scrollToFirstElementWithErr(shownAndInvalid[0]);
    } else {
      this.answersForm.emit(this.formGroup.getRawValue())
    }
  }

  private createShownAndInvalidList(): any[] {
    let arr = [];
    this.invalid.forEach(value => {
      if (document.getElementById(value)) {
        arr.push(value);
      };
    })
    return arr;
  }

  private scrollToFirstElementWithErr(id: string) {
    const el = document.getElementById(id) as HTMLElement;
    if (el) {
      const parentElement = el.parentElement;
      if (parentElement) {
        const scrollTop = parentElement.offsetTop - 50;
        window.scroll({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }

  }

  private gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  getIfError(id: string, fields?: Field[], checkbox?: boolean): boolean {
    const controls = this.formGroup.controls;

    let invalidContains = false;
    if (fields?.length > 0) {
      let counter = 0;
      for (const f of fields) {
        if (controls[f?.id]?.invalid) {
          counter++;
        }
      }

      if (counter < fields?.length) {
        invalidContains = false;
      } else {
        invalidContains = true;
      }

    } else {
      if(!checkbox){
        invalidContains = this.getIfErrorRequiredField(id)
      } else {
        invalidContains = this.getIfCheckboxRequiredInvalid(id);
      }
    }
    return invalidContains;
  }


  makeQuestionVisible(question: Question, innerQuestion: Question): boolean {
    let makeVisible: boolean = false;
    question.fields.filter(field => (field.value == this.formGroup.get(question.id).value)).forEach(
      foundField => {
        if (foundField?.makeVisible && foundField?.makeVisible.indexOf(innerQuestion?.id) > -1) {
          makeVisible = true;
        }
      }
    )
    if(!makeVisible){
      this.resetValues(innerQuestion);
    }
    return makeVisible;
  }

  private resetValues(innerQuestion: Question) {
    const controls = this.formGroup.controls;

    if (innerQuestion?.type == QuestionType.FIELDSET) {
      for (const f of innerQuestion?.fields) {
        if (f.type == FieldType.STRING || f.type == FieldType.NUMBER || f?.type == FieldType.EMAIL) {
          controls[f?.id].reset();
        } else if (f.type == FieldType.CHECKBOX) {
          controls[innerQuestion?.id].get(f?.id).reset();
        }

      }
    } else if (innerQuestion?.type == QuestionType.TEXTINPUT || innerQuestion?.type == QuestionType.RADIO) {
      controls[innerQuestion?.id].reset();
    }
  }

  showCommentField(parentId: string, id: string, fieldId: string): boolean {
    let showComment = false;
    const controls = this.formGroup.controls;
    if (controls[parentId].value[id] == true) {
      showComment = true;
    } else {
      controls[fieldId].reset();
    }
    return showComment;

  }

  showCommentFieldRadio(id: string, value: string | undefined, fieldId: string): boolean {
    let showComment = false;
    if (this.formGroup?.get(id)?.value === value) {
      showComment = true;
    }  else {
      this.formGroup?.get(fieldId).reset();
    }
    return showComment;
  }

  openModal() {
    this.toggleCancel.emit(true);
  }

  getIfErrorRequiredField(id: string) {
    return this.formGroup?.controls[id]?.invalid && this.formGroup?.controls[id]?.getError('required') == true;
  }

  getIfInvalidEmail(id: string) {
    return this.formGroup?.controls[id]?.invalid && this.formGroup?.controls[id]?.getError('email') == true;
  }

  getIfFieldInvalid(id: string) {
    return this.formGroup?.controls[id]?.invalid;
  }

  getIfCheckboxRequiredInvalid(id: string) {
    return this.formGroup?.controls[id]?.invalid  && this.formGroup?.controls[id]?.getError('requireCheckboxToBeChecked') == true;
  }

  getIfInvalidNumber(id: string) {
    let pattern = {
      requiredPattern: ''
    }
    pattern = this.formGroup?.controls[id]?.getError('pattern');
    return this.formGroup?.controls[id]?.invalid && pattern?.requiredPattern == '^[0-9]*$' == true;
  }

  closeSuccessMessage() {
    this.showSuccessMessage = false;
  }

  closeErrorMessage() {
    this.showErrorMessage = false;
  }
}


