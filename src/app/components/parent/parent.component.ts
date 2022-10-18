import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMessage } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  // inputs
  receivedFromChild: IMessage[] = [];
  @Input() fromGrandpaToParent!: string;
  @Input() grandpaName!: string;
  @Input() fromGrandpaToChild!: string;

  // outputs
  myName: string = 'ParentComponent';
  fromParentToChild: string = 'una pela';
  sendToGrandpa!: IMessage;
  @Output() parentEmitterToGrandpa: EventEmitter<IMessage> =
    new EventEmitter<IMessage>();
  @Output() childEmitterToGrandpa: EventEmitter<IMessage> =
    new EventEmitter<IMessage>();
  constructor() {}

  ngOnInit(): void {}

  setReceivedFromChild(message: IMessage): void {
    this.receivedFromChild.push({ ...message });
  }

  sendFromParentToGrandpa(message: IMessage): void {
    this.parentEmitterToGrandpa.emit(message);
  }

  sendFromChildToGrandpa(message: IMessage): void {
    this.childEmitterToGrandpa.emit(message);
  }
}
