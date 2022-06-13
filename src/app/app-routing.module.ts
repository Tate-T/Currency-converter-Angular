import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/currensy-buy/currensy-buy.module').then((m) => m.CurrensyBuyModule),
    // loadChildren: () => import('./_pages/currensy-sale/currensy-sale.module').then((m) => m.CurrensySaleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
