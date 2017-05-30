import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock = new Stock(0,'',0,0,'',[]);

  categories = ["IT", "教育", "金融"];

  formModel: FormGroup;

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {
  }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stockService.getStock(stockId).subscribe(data => {
      this.stock = data;
      this.formModel.reset({
        name:data.name,
        price:data.price,
        desc:data.desc,
        categories:[
          data.categories.indexOf(this.categories[0]) !=-1,
          data.categories.indexOf(this.categories[1]) !=-1,
          data.categories.indexOf(this.categories[2]) !=-1
        ]
      })
    });
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      desc: [this.stock.desc],
      categories: fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
/*
        new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
        new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
        new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
*/
      ], this.selectValidator)
    })
  }

  selectValidator(arrys: FormArray) {
    let valid = false;
    arrys.controls.map((item) => {
      if (item.value) {
        valid = true;
      }
    });
    if (valid) {
      return null;
    } else {
      return {cate: true}
    }
  }

  cancel() {
    this.router.navigateByUrl('/stock')
  }

  save() {
    var temp = [];
    var index = 0;
    for (var i = 0; i < this.categories.length; i++) {
      if (this.formModel.value.categories[i]) {
        temp[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = temp;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
    console.log(JSON.stringify(this.stockService.getStocks()));
    this.router.navigateByUrl('/stock')
  }
}
