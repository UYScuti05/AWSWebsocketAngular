import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AWSWebsocketAngular';
  socket:any = new WebSocket('url');

  constructor(){
    this.socket.addEventListner('open',(e:any)=>{});
    this.socket.addEventListner('close',(e:any)=>{});
    this.socket.addEventListner('error',(e:any)=>{});
    this.socket.onmessage = ()=>{
      // do some logic
    }
  }
  sendMessageToServer(){
    this.socket.send({"one":"one","two":"two"});
  }

}
