import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessage } from 'src/app/interfaces/message.interface';
import { Message } from 'src/app/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent {
  @Input() buttonText!: string;
  @Output() emitMessage: EventEmitter<IMessage> = new EventEmitter<IMessage>();

  typeOfMessage = ['good', 'bad'];

  model = new Message('', this.typeOfMessage[0]);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  emitNewMessage(message: IMessage) {
    this.emitMessage.emit(message);
  }
}
