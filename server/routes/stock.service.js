"use strict";
exports.__esModule = true;
var StockModule = require("./stock");
var StockService = /** @class */ (function () {
    function StockService() {
    }
    StockService.initialize = function () {
        if (StockService.stocks.length === 0) {
            StockService.stocks = [];
            var stock1 = new StockModule.Stock();
            stock1.setRef("Stock1");
            stock1.setQuantite(150);
            StockService.stocks.push(stock1);
            var stock2 = new StockModule.Stock();
            stock2.setRef("Stock2");
            stock2.setQuantite(250);
            StockService.stocks.push(stock2);
            var stock3 = new StockModule.Stock();
            stock3.setRef("Stock3");
            stock3.setQuantite(84);
            StockService.stocks.push(stock3);
        }
    };
    StockService.prototype.getStocks = function () {
        StockService.initialize();
        return StockService.stocks;
    };
    StockService.prototype.addStock = function (_stock) {
        StockService.initialize();
        StockService.stocks.push(_stock);
    };
    StockService.prototype.getStockByRef = function (_stockRef) {
        StockService.initialize();
        for (var i = 0; i < StockService.stocks.length; i++) {
            if (StockService.stocks[i].getRef() === _stockRef) {
                return StockService.stocks[i];
            }
        }
        return null;
    };
    StockService.stocks = [];
    return StockService;
}());
exports.StockService = StockService;
