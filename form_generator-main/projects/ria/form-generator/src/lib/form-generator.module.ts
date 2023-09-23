import { FormGeneratorComponent } from './form-generator.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from './common/translate.pipe';
import { SanitizePipe } from './common/sanitize.pipe';


@NgModule({
  declarations: [
    FormGeneratorComponent,
    TranslatePipe,
    SanitizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TranslatePipe],
  exports: [
    FormGeneratorComponent
  ]
})
export class FormGeneratorModule {
}
