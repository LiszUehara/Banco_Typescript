export class Debito{
    private _valor: number;
    private _date: Date;

    constructor (valor: number, data: Date){
        this._valor = valor;
        this._date = data;
    }

    get valor(): number{
        return this._valor;
    }

    get data(): Date{
        return this._date;
    }
}