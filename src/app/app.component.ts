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
      this.messageHistory.push(
        {
          id:this.messageHistory.length+1,
          title:message,
          owner:true,
          time:"11:30 am"
        }
      );
    }


    
}
