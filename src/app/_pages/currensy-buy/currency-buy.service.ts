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
  }
}
