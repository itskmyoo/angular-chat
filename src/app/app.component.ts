import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'today-class';


    onMessageTyped(message){
      console.log(message);
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
}
