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
    depositar(valor, dataTransacao = new Date()) {
        let credito = new Credito(valor, dataTransacao);
        this.creditos.push(credito);
    }
    sacar(valor, dataTransacao = new Date()) {
        let debito = new Debito(valor, dataTransacao);
        this.debitos.push(debito);
    }
}
