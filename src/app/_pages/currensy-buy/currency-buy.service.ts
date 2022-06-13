import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyBuyService {

  constructor(private http: HttpClient) { }

  getCurrency() {
    return this.http.get('assets/data.json');
    // return this.http.get(url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    // https://api.monobank.ua/bank/currency
    // https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}; ("apikey", "L8sohpxBj4GhDlztkb61gMcECsCIZxLE")
  }
}
