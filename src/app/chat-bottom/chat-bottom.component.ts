import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from './message-service.service';
@Component({
  selector: 'app-chat-bottom',
  templateUrl: './chat-bottom.component.html',
  styleUrls: ['./chat-bottom.component.css']
})
export class ChatBottomComponent implements OnInit {

  currentMessage = "";
  constructor() {
   }



  ngOnInit() {
  }

   onMessageClick(){

    console.log(this.currentMessage);
    this.currentMessage = "";
  }

  onValueChange(message){
    console.log(message);

    this.currentMessage = message;

  }

}
