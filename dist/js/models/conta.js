import { Credito } from "./credito.js";
import { Debito } from "./debito.js";
export class Conta {
    constructor(numero) {
        this._debitos = [];
        this._creditos = [];
        this._numero = numero;
    }
    get debitos() {
        return this._debitos;
    }
    get creditos() {
        return this._creditos;
    }
    get numero() {
        return this._numero;
    }
    depositar(valor) {
        let credito = new Credito(valor, new Date());
        this.creditos.push(credito);
    }
    sacar(valor) {
        let debito = new Debito(valor, new Date());
        this.debitos.push(debito);
    }
}
