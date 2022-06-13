import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CurrencySaleService } from './currency-sale.service';

@Component({
  selector: 'app-currensy-sale',
  templateUrl: './currensy-sale.component.html',
  styleUrls: ['./currensy-sale.component.css']
})
export class CurrensySaleComponent implements OnInit {
  ratesList: any;

  constructor(private currencySaleService: CurrencySaleService) { }

  ngOnInit(): void {
    this.currencySaleService.getCurrency().subscribe( ({data}) => {
      const {rates} = data;
      this.ratesList = 
      console.log(data)
    })
  }

}
