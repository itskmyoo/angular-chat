import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  contactList = [
    {
      id:1,
      username:"Rachit",
      lastMessage:"",
      lastTime:"11:30",
      url:"",
      isSelected:false,
      history:[

      ]
    },
    {
      id:2,
      username:"Priyanshi",
      lastMessage:"",
      lastTime:"11:30",
      url:"",
      isSelected:true,
      history:[

      ]

    },
    {
      id:3,
      username:"Bhavit",
      lastMessage:"",
      lastTime:"11:30",
      url:"",
      isSelected:false,
      history:[

      ]

    },
    {
      id:4,
      username:"Ayushi",
      lastMessage:"",
      lastTime:"11:30",
      url:"",
      isSelected:false,
      history:[

      ]

    },
    {
      id:5,
      username:"Kalpit",
      lastMessage:"",
      lastTime:"11:30",
      url:"",
      isSelected:false,
      history:[

      ]

    }
  ]

  defaultContact = this.contactList[0];


  selectChat(id){
    //console.log(id);

    // contactList.map((contact)=>contact.id == id);
    // contactList.for
    for(var i =0 ; i < this.contactList.length ; i++){
      if(this.contactList[i].id == id){
        this.contactList[i].isSelected = true;
        this.defaultContact = this.contactList[i];

      }else{
        this.contactList[i].isSelected = false;
      }
    }
  }

  messageHistory = [
    {
      id:1,
      title:"Hey!",
      owner:false,
      time:"11:30 am"
    },
    {
      id:2,
      title:"Hello!",
      owner:true,
      time:"11:31 am"
    },
    {
      id:3,
      title:"Hows you!",
      owner:false,
      time:"11:31 am"
    },
    {
      id:4,
      title:"I am good, how are you?",
      owner:true,
      time:"11:32 am"
    },
    {
      id:5,
      title:"TTYL",
      owner:true,
      time:"11:33 am"
    }

  ]

  onMessageTyped(message){
    console.log(message);

    let createTime = new Date().toLocaleTimeString();
    this.defaultContact.history.push(
      {
        id:this.defaultContact.history.length+1,
        title:message,
        owner:true,
        time: createTime
      }
    );
    this.defaultContact.lastTime = createTime;
    this.defaultContact.lastMessage = message;
    console.log(this.defaultContact);


  }

  constructor() { }
}
