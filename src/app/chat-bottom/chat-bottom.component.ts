import { Component, OnInit , Input , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-bottom',
  templateUrl: './chat-bottom.component.html',
  styleUrls: ['./chat-bottom.component.css']
})
export class ChatBottomComponent implements OnInit {

  // @Output() messageEmit = new EventEmitter<string>();
  currentMessage = "";
  constructor() {
   }



  ngOnInit() {
  }

   onMessageClick(){

    console.log(this.currentMessage);
    this.currentMessage = "";

    this.messageEmit.emit(this.currentMessage);
  }

  onValueChange(message){
    console.log(message);

    this.currentMessage = message;

  }

}
