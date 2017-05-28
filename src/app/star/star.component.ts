import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    this.stars=[];
    for(var i=1; i<=5; i++){
      this.stars.push(i>this.rating);
    }
  }

  @Input()
  private rating:number=0;
  private stars:boolean[];
  @Input()
  private readonly: boolean =true;

  @Output()
  ratingChange: EventEmitter<number> =new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  editStar(index: number){
    if(!this.readonly){
      this.rating = index+1;
      this.ratingChange.emit(this.rating);
    }
  }
}
