import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  public messages: string[] = [];

  public get Messages() {
    return this.messageService.messages;
  }
  public getMess(): void {
    this.messages = this.Messages;
  }

  public get clearMethod() {
    return this.messageService.clear;
  }
  public clear(): void {
    this.clearMethod();
  }

  ngOnInit(): void {
    this.getMess();
  }
}
