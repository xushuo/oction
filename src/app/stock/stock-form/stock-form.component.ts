import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-msg/stock-msg.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;

  constructor() { }

  ngOnInit() {
    this.stock= new Stock(3, "股票3", 3.99, 4.5, "不错的股票3", ["文化", "商业"]);
  }

}
