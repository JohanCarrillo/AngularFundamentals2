import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  myName: string = 'ChildComponent';

  // outputs
  sendToParent: string = 'una maldad >:(';
  sendToGrandpa: string = 'un abrazo :D';
  @Output() childEmitterToParent: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() childEmitterToGrandpa: EventEmitter<string> =
    new EventEmitter<string>();

  // inputs
  @Input() fromParentToChild!: string;
  @Input() parentName!: string;
  @Input() fromGrandpaToChild!: string;
  @Input() grandpaName!: string;

  constructor() {}

  ngOnInit(): void {}

  // emitter methods
  sendFromChildToParent(message: string): void {
    this.childEmitterToParent.emit(message);
  }

  sendFromChildToGrandpa(message: string): void {
    this.childEmitterToGrandpa.emit(message);
  }
}
