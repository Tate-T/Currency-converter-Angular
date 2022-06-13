import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrensyBuyComponent } from './currensy-buy.component';

describe('CurrensyBuyComponent', () => {
  let component: CurrensyBuyComponent;
  let fixture: ComponentFixture<CurrensyBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrensyBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrensyBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
