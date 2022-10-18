import { Pipe, PipeTransform } from '@angular/core';
import { IMessage } from '../interfaces/message.interface';

@Pipe({ name: 'goodMessage', pure: false })
export class GoodMessagePipe implements PipeTransform {
  transform(messages: IMessage[]) {
    return messages.filter((message) => message.goodOrBad === 'good');
  }
}
