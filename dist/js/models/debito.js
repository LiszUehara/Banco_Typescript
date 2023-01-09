export class Debito {
    constructor(valor, data) {
        this._valor = valor;
        this._date = data;
    }
    get valor() {
        return this._valor;
    }
    get data() {
        return this._date;
    }
}
