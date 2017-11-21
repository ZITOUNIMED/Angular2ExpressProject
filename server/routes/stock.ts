export class Stock {
  private ref:string;
  private quantite:number;

  constructor(){}

  getRef():string{
    return this.ref;
  }

  setRef(_ref:string):void{
    this.ref = _ref;
  }

  getQuantite():number{
    return this.quantite;
  }

  setQuantite(_quantite:number):void{
    this.quantite = _quantite;
  }
}
