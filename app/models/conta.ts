import { Credito } from "./credito.js";
import { Debito } from "./debito.js";

export abstract class Conta{
    private _numero: string;
    private _debitos: Array<Debito> = [];
    private _creditos: Array<Credito> = [];

    public get debitos(): Array<Debito> {
        return this._debitos;
    }
    
    public get creditos(): Array<Credito> {
        return this._creditos;
    }

    constructor(numero: string){
        this._numero = numero;
    }

    get numero(){
        return this._numero;
    }

    depositar(valor: number, dataTransacao: Date = new Date()){
        let credito = new Credito(
            valor,
            dataTransacao
        )
        this.creditos.push(credito)
    }

    sacar(valor: number, dataTransacao: Date = new Date()){
        let debito = new Debito(
            valor,
            dataTransacao
        )
        this.debitos.push(debito)
    }
    
}