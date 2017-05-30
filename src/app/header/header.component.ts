import { Component, OnInit } from '@angular/core';
import {MsgServerService} from "./msg-server.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  msgCount:number =0;

  constructor(public  server:MsgServerService) { }

  ngOnInit() {
    this.server.createObservableSocket("ws://localhost:8085")
      .map(event => JSON.parse(event))
      .subscribe(event => this.msgCount = event.msgCount)
  }

}
