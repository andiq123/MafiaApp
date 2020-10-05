import { MessagesRecieverService } from './messages-reciever.service';
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  constructor(private messageService: MessagesRecieverService) {
    this.startConnection();
    this.MessageRecieved();
    this.SomeOneConnected();
  }
  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chathub')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  MessageRecieved() {
    this.hubConnection.on('ReceiveMessage', (msg) => {
      this.messageService.MessageRecieved(msg);
    });
  }

  SendMessage(msg) {
    this.hubConnection.invoke('SendMessage', msg);
  }

  SomeOneConnected() {
    this.hubConnection.on('SomeonConnected', () => {
      this.messageService.SomeoneConnected();
    });
  }
}
