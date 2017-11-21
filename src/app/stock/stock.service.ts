import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  constructor(private http: Http) { }

  getAllStocks(){
    return this.http.get('/api/stocks')
      .map(res => res.json());
  }
}
