import { Component, OnInit,Input } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact;
  constructor(private messageService: MessageServiceService) {
  }
  ngOnInit() {
  }

  selectChat(contactId){
    console.log(contactId._id);

    this.messageService.selectChat(contactId._id);

  }
}
