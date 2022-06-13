import { Component } from '@angular/core';
// import { CurrencySaleService } from './_pages/currensy-sale/currency-sale.service';

// interface FormSale {
//   ccy: string;
//   sale: number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURRENCY CONVERTER';
  
  titleForm = 'Select type of currency for SALE:'

  // ratesList: FormSale [];

  // constructor(private currencySaleService: CurrencySaleService) { }

  // ngOnInit(): void {
  //   this.currencySaleService.getCurrency().subscribe( res => {
  //     const {data} = res;
  //     const {rates} = data;
  //     this.ratesList = rates.map((rate) => {
  //       return {
  //         ccy: rate.ccy,
  //         sale: rate.sale
  //       }
  //     })
  //     console.log(data)
  //   })
  // }
}
