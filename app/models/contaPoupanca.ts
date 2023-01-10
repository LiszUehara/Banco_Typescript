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
        
        let saldo: number = 0;
        let rendimentoFinal: number = 0;
        let rendimento: number = 0;
        this.creditos.forEach(credito => {
            rendimento = 0;
            if(saldo == 0) saldo = credito.valor
            else {
                this.debitos.forEach(debito => {
                    if(debito.data.getMonth() == credito.data.getMonth()){
                        saldo -= debito.valor
                    }
                })
                rendimento = saldo *(this.rentabilidadeMensal*0.01)
                rendimentoFinal += rendimento;
                saldo += rendimento + credito.valor;
            }
        });
        
        return rendimentoFinal;
    }

    calcularSaldo(): number{
        let saldo = 0;
        this.creditos.forEach(credito => { saldo += credito.valor });
        this.debitos.forEach(debito => { saldo -= debito.valor });
        saldo+= this.calcularRendimento();
        if(saldo<0) return 0 ; else return saldo;
    }

    imprimirSaldo() {
        console.log(this.calcularSaldo().toFixed(2))
    }

}
