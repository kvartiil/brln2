# FormGenerator

FormGenerator is a npm library that generates a form based on a specific JSON. Originally created for the KIKK questionnaire. The JSON example can be found in the app.component.ts file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Installation
`npm install @ria/stateportal-form-generator`

### Usage
Import the FormGeneratorModule and add it to the imports of your module.

```
import { FormGeneratorModule } from '@ria/stateportal-form-generator';

@NgModule({
imports: [FormGeneratorModule],
declarations: [...],
exports: [...]
})
export class YourModule { }`
```

Call the component from within a template
```
  <lib-form-generator
  [form]="jsonForm"
  [answers]="formAnswers"
  [error]="false"
  [success]="false"
  ></lib-form-generator>
```
