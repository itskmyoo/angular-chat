import { Component, OnInit ,Input} from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() message;
  constructor(private messageService: MessageServiceService) { }

  ngOnInit() {
  }

}
