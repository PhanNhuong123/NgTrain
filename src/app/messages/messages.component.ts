import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  public messages: string[];
  
  
  constructor(private messageService: MessageService) {
    this.messages = messageService.messages;
  
  }
  
  

  public clear() {
    this.messageService.clear();
    this.messages = this.messageService.messages;
  }

  ngOnInit(): void {}
}
