import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrensySaleComponent } from './currensy-sale.component';
import {SaleRoutingModule} from './sale-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencySaleService } from './currency-sale.service';


@NgModule({
  declarations: [
    CurrensySaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencySaleService
  ]
})
export class CurrensySaleModule { }
