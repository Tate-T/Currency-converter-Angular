import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrensyBuyModule } from './currensy-buy.module';

const routes: Routes = [
  {
    path: '',
    component: CurrensyBuyModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
