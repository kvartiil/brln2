import { Pipe, PipeTransform } from '@angular/core';
import et from '../assets/et.json'

@Pipe({
  name: 'translate',
  pure: false // required to update the value when the promise is resolved
})
export class TranslatePipe implements PipeTransform {

  constructor() {}

  transform(code: string, params?: { [key: string]: string | number | undefined }): string {
    let messages: { [key: string]: string } = {};
    messages = et as { [key: string]: string };
    return this.replaceParams(messages[code], params) ?? code;
  }

  replaceParams(text: string, params?: { [key: string]: string | number | undefined }): string | undefined {
    if (!text || !params || !Object.keys(params)?.length) {
      return text;
    }

    const keys = Object.keys(params);
    keys.forEach(key => {
      text = text.replace(`{{${key}}}`, (params[key] || '').toString());
    });

    return text;
  }
}
