import { Component } from '@angular/core';
import { MessageService } from './message-service/message-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  constructor(public messageService: MessageService) {}
  sendMessage() {
    this.messageService.add('Nova mensagem em ' + new Date());
}
}
