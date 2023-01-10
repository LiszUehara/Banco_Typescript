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
        const creditosOrganizados = this.creditos.sort((a, b) => a.data.getTime() - b.data.getTime());
        const debitosOrganizados = this.debitos.sort((a, b) => a.data.getTime() - b.data.getTime());
        let rendimento = 0;
        for (let index = 0; index < 12; index++) {
            let saldo = 0;
            creditosOrganizados.forEach(credito => {
                if (credito.data.getMonth() == index) {
                    saldo += credito.valor;
                }
            });
            debitosOrganizados.forEach(debito => {
                if (debito.data.getMonth() == index) {
                    saldo -= debito.valor;
                }
            });
        }
        return 0;
    }
    calcularSaldo() {
        let saldo = 0;
        this.creditos.forEach(credito => { saldo += credito.valor; });
        this.debitos.forEach(debito => { saldo -= debito.valor; });
        saldo += this.calcularRendimento();
        if (saldo < 0)
            return 0;
        else
            return saldo;
    }
    imprimirSaldo() {
        console.log(this.calcularSaldo());
    }
}
