///<reference path="../../../node_modules/rxjs/add/operator/filter.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle:string='';
  pageDesc:string='';
  constructor(public routeInfo:Router) {
    this.routeInfo.events.filter(event =>event instanceof NavigationEnd).subscribe((event:NavigationEnd)=>{
      if(event.url=='/dashboard'){
        this.pageTitle="这是首页";
        this.pageDesc="首页描述";
      }else if(event.url.startsWith('/stock')){
        this.pageTitle="股票管理";
        this.pageTitle="股票管理描述";
      }
    });
  }

  ngOnInit() {
  }

}
