import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrensySaleComponent } from './currensy-sale.component';
import {SaleRoutingModule} from '../currensy-sale/sale-routing.module';


@NgModule({
  declarations: [
    CurrensySaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class CurrensySaleModule { }
