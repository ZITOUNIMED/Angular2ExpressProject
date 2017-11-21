
import {Stock} from './stock';

export class StockService{

  static stocks:Stock[] = [];

  static initialize() {
    if(StockService.stocks.length === 0){
      StockService.stocks = [];
      var stock1:Stock = new Stock();
      stock1.setRef("Stock1");
      stock1.setQuantite(150);
      StockService.stocks.push(stock1);

      var stock2:Stock = new Stock();
      stock2.setRef("Stock2");
      stock2.setQuantite(250);
      StockService.stocks.push(stock2);

      var stock3:Stock = new Stock();
      stock3.setRef("Stock3");
      stock3.setQuantite(84);
      StockService.stocks.push(stock3);
    }
  }

  getStocks():Stock[]{
    StockService.initialize();
    return StockService.stocks;
  }

  addStock(_stock:Stock):void{
    StockService.initialize();
    StockService.stocks.push(_stock);
  }

  getStockByRef(_stockRef:string):Stock{
    StockService.initialize();
    for(var i = 0; i<StockService.stocks.length; i++){
      if(StockService.stocks[i].getRef()===_stockRef){
        return StockService.stocks[i];
      }
    }
    return null;
  }
}
