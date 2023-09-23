import { Pipe, PipeTransform } from '@angular/core';
import DOMPurify from 'dompurify';
@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor() {
  }

  transform(value: string): string {
    return DOMPurify.sanitize(value, {USE_PROFILES: {html: true}, FORBID_ATTR: ['class']})
  }
}
