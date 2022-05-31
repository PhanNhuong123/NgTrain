import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  public messages?: string[];

  public getMessage(): void {
    this.messages = this.messageService.messages;
  }

  public clear() : void {
    this.messageService.clear()
  }
  ngOnInit(): void {
    this.getMessage()
  }
}
