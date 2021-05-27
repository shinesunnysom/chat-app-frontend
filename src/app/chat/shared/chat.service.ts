import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  sendMessage(msg: string){
    this.socket.emit("message", msg)
  }
}
