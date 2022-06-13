import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrensySaleComponent } from './currensy-sale.component';

describe('CurrensySaleComponent', () => {
  let component: CurrensySaleComponent;
  let fixture: ComponentFixture<CurrensySaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrensySaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrensySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
