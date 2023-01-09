import { Conta } from "./conta.js";
import { Credito } from "./credito.js";
import { Debito } from "./debito.js";

export class ContaCorrente extends Conta{
    private _limite: number;

    constructor(numero: string, limite: number){
        super(numero);
        this._limite = limite;
    }

    get rentabilidadeMensal(){
        return this._limite;
    }

    transferir(contaDestino: Conta, valor: number): void{
        const credito = new Credito(
            valor, new Date()
        )
        const debito = new Debito(
            valor, new Date()
        )

        this.debitos.push(debito)
        contaDestino.creditos.push(credito)
    }

    calcularSaldo(): number{
        let saldo = 0;
        this.creditos.forEach(credito => { saldo += credito.valor });
        this.debitos.forEach(debito => { saldo -= debito.valor });
        saldo += this._limite;
        if(saldo<0) return 0 ; else return saldo;
    }

    imprimirSaldo() {
        console.log(this.calcularSaldo())
    }

}