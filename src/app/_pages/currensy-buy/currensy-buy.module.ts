import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrensyBuyComponent } from './currensy-buy.component';
import {BuyRoutingModule} from '../currensy-buy/buy-routing.module';


@NgModule({
  declarations: [
    CurrensyBuyComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule
  ]
})
export class CurrensyBuyModule { }
