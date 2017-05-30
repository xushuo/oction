import {Component, OnInit} from '@angular/core';
import {Menu} from "../../menu/menu.component";
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import  'rxjs/Rx';
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-msg',
  templateUrl: './stock-msg.component.html',
  styleUrls: ['./stock-msg.component.css']
})
export class StockMsgComponent implements OnInit {
  private stocks: Observable<Stock[]>;

  private nameFilter: FormControl  = new FormControl();

  private keyWord:string;

  constructor(public routeInfo:Router,private stockService:StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(val => this.keyWord=val);
  }
   create(){
      this.routeInfo.navigateByUrl('/stock/0')
   }
   update(stock:Stock){
     this.routeInfo.navigateByUrl('/stock/'+stock.id)
   }
}

