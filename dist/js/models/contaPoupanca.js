import { Conta } from "./conta.js";
export class ContaPoupanca extends Conta {
    constructor(numero, rentabilizadeMensal) {
        super(numero);
        this._rentabilidadeMensal = rentabilizadeMensal;
    }
    get rentabilidadeMensal() {
        return this._rentabilidadeMensal;
    }
    calcularRendimento() {
        return 0;
    }
    calcularSaldo() {
        let saldo = 0;
        this.creditos.forEach(credito => { saldo += credito.valor; });
        this.debitos.forEach(debito => { saldo -= debito.valor; });
        // CALCULAR RENDIMENTO
        if (saldo < 0)
            return 0;
        else
            return saldo;
    }
    imprimirSaldo() {
        console.log(this.calcularSaldo());
    }
}
