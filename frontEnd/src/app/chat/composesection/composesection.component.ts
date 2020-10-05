import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composesection',
  templateUrl: './composesection.component.html',
  styleUrls: ['./composesection.component.css'],
})
export class ComposesectionComponent implements OnInit {
  message: string;
  @Output() messageSent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  sendMsg() {
    if (this.message) {
      this.messageSent.emit({ name: 'sandu', msg: this.message });
      this.message = '';
    }
  }
}
