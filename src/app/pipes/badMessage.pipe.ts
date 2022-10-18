import { Pipe, PipeTransform } from '@angular/core';
import { IMessage } from '../interfaces/message.interface';

@Pipe({ name: 'badMessage', pure: false })
export class BadMessagePipe implements PipeTransform {
  transform(messages: IMessage[]) {
    const newArray = messages.filter((message) => message.goodOrBad === 'bad');
    return newArray.map((messages) => ' ' + messages.message);
  }
}
