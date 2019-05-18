import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  time;
  
  constructor(private messageService: MessageServiceService) {


  }
  ngOnInit() {
    this.time = new Date();
  }

}
