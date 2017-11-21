import { Component, OnInit } from '@angular/core';

import {StockService} from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stocks:any = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {

    this.stockService.getAllStocks().subscribe(stocks => {
      this.stocks = stocks;
    })
  }

}
