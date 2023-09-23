export interface JsonForm {
  id: string;
  title: Text;
  generalInfo: GeneralInfo;

  version?: number;

  sections: Section[];
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  deletedBy: string;
  deletedAt: string;

}

export interface GeneralInfo {
  title: Text;
  description: Text;
}


export interface Section {
  id: string;
  title: Text;
  description?: Text;
  questions: Question[];
}

export interface Question {
  id: string;
  title: Text;
  description?: Text;
  type?: string;
  required?: boolean;
  enteredValue?: any;
  fields?: Field[];
  questions?: Question [];
}

export interface Field {
  id?: string;
  title?: Text;
  description?: Text;
  prefix?: string;
  suffix?: string;
  type?: string;
  required?: boolean;
  enteredValue?: any;
  value?: string;
  fields?: Field[];
  rows?: number;
  maxLength?: number;
  makeVisible?: string [];
}

export interface Text {
  et?: string;
  en?: string;
  ru?: string;
}

export enum QuestionType {
  RADIO = 'radio',
  FIELDSET = 'fieldset',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea',
  TEXTINPUT = 'textinput'
}

export enum FieldType {
  NUMBER = 'number',
  STRING = 'string',
  EMAIL = 'email',
  DATE = 'date',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea'
}
