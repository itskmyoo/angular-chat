import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  contactList = []

  defaultContact = this.contactList[0];

  senderContact;


  setContactList(data){



      this.senderContact = data[0];
      data = data.slice(1,data.length);
      console.log(data);
      this.contactList = data;
       data[0].isSelected = true;
      this.defaultContact = data[0];



      //
      console.log(this.defaultContact);

  }


  selectChat(id){
    //console.log(id);

    // contactList.map((contact)=>contact.id == id);
    // contactList.for


    for(var i =0 ; i < this.contactList.length ; i++){
      if(this.contactList[i]._id == id){
        this.contactList[i].isSelected = true;
        if(this.contactList[i].history == undefined)
        this.contactList[i] = {...this.contactList[i] , history:[]};

        this.defaultContact = this.contactList[i];

        this.getChatHistory();

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


     this.http.post("http://192.168.1.3:3000/message" , {
       senderId:this.senderContact._id,
       receiverId:this.defaultContact._id,
       message:message
     }).subscribe((data)=>{
       console.log(data);
       let createTime = new Date().toLocaleTimeString();
    

       for(var i =0 ; i < this.contactList.length ; i++){
         if(this.contactList[i]._id == this.defaultContact._id){
           this.contactList[i]['history'].push({...data, owner:true});
           this.contactList[i].lastTime = createTime;
          this.contactList[i].lastMessage = message;

         }
       }


       console.log(this.defaultContact);
     });





  }
  getChatHistory(){
    this.http.post("http://192.168.1.3:3000/chat" , {
      senderId:this.senderContact._id,
      receiverId:this.defaultContact._id
    }).subscribe((data)=>{

      console.log(data);

      for(var i =0 ; i < this.contactList.length ; i++){
        if(this.contactList[i]._id == this.defaultContact._id){
          this.contactList[i]['history'] = data;


        }
      }

    });
  }
  getServerContact(){

    return this.http.get("http://192.168.1.3:3000/contact");


  }

  constructor(private http: HttpClient) { }
}
