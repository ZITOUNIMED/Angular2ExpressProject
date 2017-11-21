"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock() {
    }
    Stock.prototype.getRef = function () {
        return this.ref;
    };
    Stock.prototype.setRef = function (_ref) {
        this.ref = _ref;
    };
    Stock.prototype.getQuantite = function () {
        return this.quantite;
    };
    Stock.prototype.setQuantite = function (_quantite) {
        this.quantite = _quantite;
    };
    return Stock;
}());
exports.Stock = Stock;
