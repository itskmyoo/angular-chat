import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBottomComponent } from './chat-bottom/chat-bottom.component';
import { ChatSideComponent } from './chat-side/chat-side.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBottomComponent,
    ChatSideComponent,
    ChatWindowComponent,
    ContactCardComponent,
    ChatMessageComponent,
    ChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
