import { Conta } from "./conta.js";
import { Credito } from "./credito.js";
import { Debito } from "./debito.js";
export class ContaCorrente extends Conta {
    constructor(numero, limite) {
        super(numero);
        this._limite = limite;
    }
    get rentabilidadeMensal() {
        return this._limite;
    }
    transferir(contaDestino, valor) {
        const credito = new Credito(valor, new Date());
        const debito = new Debito(valor, new Date());
        this.debitos.push(debito);
        contaDestino.creditos.push(credito);
    }
    calcularSaldo() {
        let saldo = 0;
        this.creditos.forEach(credito => { saldo += credito.valor; });
        this.debitos.forEach(debito => { saldo -= debito.valor; });
        saldo += this._limite;
        if (saldo < 0)
            return 0;
        else
            return saldo;
    }
    imprimirSaldo() {
        console.log(this.calcularSaldo());
    }
}
