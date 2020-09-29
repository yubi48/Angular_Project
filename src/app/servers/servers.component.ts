import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!'
  serverName = '';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created';
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
