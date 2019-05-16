import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  messageHistory = [
    "message 1",
    "message 2",
    "message 3",
    "message 4",
    "message 5"

  ]
  constructor() { }
}
