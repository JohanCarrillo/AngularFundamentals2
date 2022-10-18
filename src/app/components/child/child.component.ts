import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMessage } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  myName: string = 'ChildComponent';

  // outputs
  sendToParent!: IMessage;
  sendToGrandpa!: IMessage;
  @Output() childEmitterToParent: EventEmitter<IMessage> =
    new EventEmitter<IMessage>();
  @Output() childEmitterToGrandpa: EventEmitter<IMessage> =
    new EventEmitter<IMessage>();

  // inputs
  @Input() fromParentToChild!: string;
  @Input() parentName!: string;
  @Input() fromGrandpaToChild!: string;
  @Input() grandpaName!: string;

  constructor() {}

  ngOnInit(): void {}

  // emitter methods
  sendFromChildToParent(message: IMessage): void {
    this.childEmitterToParent.emit(message);
  }

  sendFromChildToGrandpa(message: IMessage): void {
    this.childEmitterToGrandpa.emit(message);
  }
}
