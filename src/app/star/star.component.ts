import {Component, Input, OnInit} from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input()
  private rating:number=0;
  private stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars=[];
    for(var i=1; i<=5; i++){
        this.stars.push(i>this.rating);
    }

  }

}
