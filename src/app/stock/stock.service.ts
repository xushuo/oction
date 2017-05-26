import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }
  private stocks:Stock[]=[
    new Stock(1, "股票1", 1.99, 3.5, "不错的股票1", ["IT", "教育"]),
    new Stock(2, "股票2", 2.99, 1.5, "不错的股票2", ["IT", "体育"]),
    new Stock(3, "股票3", 3.99, 4.5, "不错的股票3", ["文化", "商业"]),
    new Stock(4, "股票4", 4.99, 5, "不错的股票4", ["体育", "足球"]),
    new Stock(5, "股票5", 5.99, 2.5, "不错的股票5", ["房地产"]),
    new Stock(6, "股票6", 6.99, 3.0, "不错的股票6", ["石油", "房地产"]),
    new Stock(7, "股票7", 7.99, 0, "不错的股票7?", ["金融", "教育"])
  ];
  getStocks():Stock[]{
    return this.stocks
  }
  getStock(id:number):Stock{
    var stock = this.stocks.find(stock => stock.id==id);
    if(!stock){
      stock = new Stock(0,'',0,0,'',[]);
    }
    return stock;
  }
}
export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>){

  };
}
