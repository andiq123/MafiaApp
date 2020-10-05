import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesRecieverService {
  public messageRecieved = new EventEmitter();
  public someoneConnected = new EventEmitter();

  constructor() {}

  public MessageRecieved(msg) {
    return this.messageRecieved.emit(msg);
  }
  public SomeoneConnected() {
    return this.someoneConnected.emit();
  }
}
