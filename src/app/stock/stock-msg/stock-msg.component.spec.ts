import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMsgComponent } from './stock-msg.component';

describe('StockMsgComponent', () => {
  let component: StockMsgComponent;
  let fixture: ComponentFixture<StockMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
