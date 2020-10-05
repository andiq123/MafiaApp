import { SignalrService } from './../signalr.service';
import { MessagesRecieverService } from './../messages-reciever.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  users = [
    { name: 'sandu', msg: 'iobana' },
    { name: 'alex', msg: 'wai sami bag pl' },
    { name: 'galea', msg: 'da si eu' },
  ];
  constructor(
    private msgReciever: MessagesRecieverService,
    private signalService: SignalrService
  ) {}

  ngOnInit(): void {
    this.msgReciever.messageRecieved.subscribe((msg) => {
      this.users.push({ name: 'Aliosha', msg });
    });
    this.msgReciever.someoneConnected.subscribe(() => {
      this.users.push({ name: 'someone', msg: 'cineva a intrat pizda mati' });
    });
  }

  OnMessageSent(user: { name: string; msg: string }) {
    this.users.push(user);
    this.SendMsg(user.msg);
  }

  SendMsg(msg) {
    this.signalService.SendMessage(msg);
  }
}
