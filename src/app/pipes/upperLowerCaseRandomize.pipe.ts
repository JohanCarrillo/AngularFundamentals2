import { Pipe, PipeTransform } from '@angular/core';
import { IMessage } from '../interfaces/message.interface';

@Pipe({ name: 'upperLowerCaseRandomize', pure: true })
export class UpperLowerCaseRandomizePipe implements PipeTransform {
  transform(message: string) {
    const stringArray = message.split('');
    for (let c = 0; c < stringArray.length; c++) {
      Math.random() * 2 === 0
        ? stringArray[c].toLowerCase()
        : stringArray[c].toUpperCase();
    }
    return stringArray.join('');
  }
}
