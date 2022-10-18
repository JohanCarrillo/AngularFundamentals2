import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-grandpa',
  templateUrl: './grandpa.component.html',
  styleUrls: ['./grandpa.component.scss'],
})
export class GrandpaComponent implements OnInit {
  // inputs
  receivedFromParent: IMessage[] = [];
  receivedFromChild: IMessage[] = [];

  // outputs
  myName: string = 'GrandpaComponent';
  fromGrandpaToParent: string = 'un regaño';
  fromGrandpaToChild: string = 'la liga';
  constructor() {}

  ngOnInit(): void {}

  setReceivedFromParent(message: IMessage): void {
    this.receivedFromParent.push({ ...message });
  }

  setReceivedFromChild(message: IMessage): void {
    this.receivedFromChild.push({ ...message });
  }
}
