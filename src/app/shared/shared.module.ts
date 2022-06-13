import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleFormComponent } from './sale-form/sale-form.component';



@NgModule({
  declarations: [
    SaleFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SaleFormComponent]
})
export class SharedModule { }
