import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  // inputs
  receivedFromChild!: string;
  @Input() fromGrandpaToParent!: string;
  @Input() grandpaName!: string;
  @Input() fromGrandpaToChild!: string;

  // outputs
  myName: string = 'ParentComponent';
  fromParentToChild: string = 'una pela';
  sendToGrandpa: string = 'maltrato al nieto D:<';
  @Output() parentEmitterToGrandpa: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() childEmitterToGrandpa: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  setReceivedFromChild(message: string): void {
    this.receivedFromChild = message;
  }

  sendFromParentToGrandpa(message: string): void {
    this.parentEmitterToGrandpa.emit(message);
  }

  sendFromChildToGrandpa(message: string): void {
    this.childEmitterToGrandpa.emit(message);
  }
}
