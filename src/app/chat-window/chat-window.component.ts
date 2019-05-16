import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})


export class ChatWindowComponent implements OnInit {


  @Input() chatHistory;

  constructor() { }

  ngOnInit() {
  }

}
