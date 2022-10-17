import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandpa',
  templateUrl: './grandpa.component.html',
  styleUrls: ['./grandpa.component.scss'],
})
export class GrandpaComponent implements OnInit {
  // inputs
  receivedFromParent!: string;
  receivedFromChild!: string;

  // outputs
  myName: string = 'GrandpaComponent';
  fromGrandpaToParent: string = 'un regaño';
  fromGrandpaToChild: string = 'la liga';
  constructor() {}

  ngOnInit(): void {}

  setReceivedFromParent(message: string): void {
    this.receivedFromParent = message;
  }

  setReceivedFromChild(message: string): void {
    this.receivedFromChild = message;
  }
}
