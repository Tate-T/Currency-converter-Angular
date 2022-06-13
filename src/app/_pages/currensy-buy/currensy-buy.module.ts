import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrensyBuyComponent } from './currensy-buy.component';
import {BuyRoutingModule} from './buy-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyBuyService } from './currency-buy.service';


@NgModule({
  declarations: [
    CurrensyBuyComponent
  ],
  imports: [
    CommonModule,
    // BuyRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencyBuyService
  ]
})
export class CurrensyBuyModule { }
