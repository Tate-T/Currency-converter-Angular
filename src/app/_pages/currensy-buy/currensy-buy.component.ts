import { Component, OnInit } from '@angular/core';
import { CurrencyBuyService } from './currency-buy.service';

@Component({
  selector: 'app-currensy-buy',
  templateUrl: './currensy-buy.component.html',
  styleUrls: ['./currensy-buy.component.css']
})
export class CurrensyBuyComponent implements OnInit {

  constructor(private CurrencyBuyService: CurrencyBuyService) { }

  ngOnInit(): void {
  }

}
