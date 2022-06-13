import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrensySaleModule } from './currensy-sale.module';

const routes: Routes = [ 
  {
  path: '',
  component: CurrensySaleModule
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
