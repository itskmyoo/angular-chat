import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {


  messageHistory = [
    "message 1",
    "message 2",
    "message 3",
    "message 4",
    "message 5"

  ]
  constructor() { }

  ngOnInit() {
  }

}
