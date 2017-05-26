import {Component, OnInit} from '@angular/core';
import {Menu} from "../../menu/menu.component";
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";

@Component({
  selector: 'app-stock-msg',
  templateUrl: './stock-msg.component.html',
  styleUrls: ['./stock-msg.component.css']
})
export class StockMsgComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor(public routeInfo:Router,private stockService:StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }
   create(){
      this.routeInfo.navigateByUrl('/stock/0')
   }
   update(stock:Stock){
     this.routeInfo.navigateByUrl('/stock/'+stock.id)
   }
}

