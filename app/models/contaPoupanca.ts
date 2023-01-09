import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta{
    private _rentabilidadeMensal: number;

    constructor(numero: string, rentabilizadeMensal: number){
        super(numero);
        this._rentabilidadeMensal = rentabilizadeMensal;
    }

    get rentabilidadeMensal(){
        return this._rentabilidadeMensal;
    }

    calcularRendimento(): number{
        console.log()
        return 0;
    }

    calcularSaldo(): number{
        let saldo = 0;
        this.creditos.forEach(credito => { saldo += credito.valor });
        this.debitos.forEach(debito => { saldo -= debito.valor });
        saldo+= this.calcularRendimento();
        if(saldo<0) return 0 ; else return saldo;
    }

    imprimirSaldo() {
        console.log(this.calcularSaldo())
    }

}