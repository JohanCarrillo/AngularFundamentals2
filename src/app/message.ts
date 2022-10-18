import { IMessage } from './interfaces/message.interface';

export class Message implements IMessage {
  message: string;
  goodOrBad: string;
  constructor(message: string, goodOrBad: string) {
    this.message = message;
    this.goodOrBad = goodOrBad;
  }
}
