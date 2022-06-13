import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CurrencySaleService } from './currency-sale.service';

interface FormSale {
  ccy: string;
  sale: number
}

@Component({
  selector: 'app-currensy-sale',
  templateUrl: './currensy-sale.component.html',
  styleUrls: ['./currensy-sale.component.css']
})
export class CurrensySaleComponent implements OnInit {
  ratesList: FormSale [];

  constructor(private currencySaleService: CurrencySaleService) { }

  ngOnInit(): void {
    this.currencySaleService.getCurrency().subscribe( res => {
      const {data} = res;
      const {rates} = data;
      this.ratesList = rates.map((rate) => {
        return {
          ccy: rate.ccy,
          sale: rate.sale
        }
      })
      console.log(data)
    })
  }

}
