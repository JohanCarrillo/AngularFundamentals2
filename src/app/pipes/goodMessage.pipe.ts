import { Pipe, PipeTransform } from '@angular/core';
import { IMessage } from '../interfaces/message.interface';

@Pipe({ name: 'goodMessage', pure: false })
export class GoodMessagePipe implements PipeTransform {
  transform(messages: IMessage[]) {
    const newArray = messages.filter((message) => message.goodOrBad === 'good');
    return newArray.map((messages) => ' ' + messages.message);
  }
}
