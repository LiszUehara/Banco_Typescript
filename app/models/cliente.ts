import { Pessoa } from "./pessoa.js";
import { Endereco } from "./endereco.js";
import { IUsuario } from "./IUsuario.js";
import { Conta } from "./conta.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { ContaCorrente } from "./contaCorrente.js";

export class Cliente extends Pessoa implements IUsuario{
    private _vip: boolean;
    private enderecos: Array<Endereco> = [];
    private contas: Array<Conta> = [];


    constructor(cpf: string, nome: string, telefone: string, vip: boolean,endereco: Endereco, conta: Conta){
        super(cpf, nome, telefone);
        this._vip = vip;
        this.adicionarConta(conta)
        this.adicionarEndereco(endereco)
    }

    autenticar(): boolean {
        return true;
    }


    get vip(){
        return this._vip;
    }


    adicionarEndereco(endereco: Endereco) {
        this.enderecos.push(endereco)
    }

    adicionarConta(conta: Conta) {
        this.contas.push(conta)
    }

    realizarDeposito(contaUsada: Conta,valor: number){
        const id = this.contas.indexOf(contaUsada)
        this.contas[id].depositar(valor)
    }

    realizarSaque(contaUsada: Conta,valor: number){
        const id = this.contas.indexOf(contaUsada)
        this.contas[id].sacar(valor)
    }

    verificarSaldo(contaUsada: Conta){
        const id = this.contas.indexOf(contaUsada)
        const conta = this.contas[id]
        if(conta instanceof ContaPoupanca || conta instanceof ContaCorrente){
            conta.imprimirSaldo()
        }
    }

    transferir(contaOrigem: Conta, contaDestino: Conta,valor: number){
        const id = this.contas.indexOf(contaOrigem)
        const conta = this.contas[id]
        if(conta instanceof ContaCorrente){
            conta.transferir(contaDestino,valor)
        }else {
            console.log("Não é possível transferir em contas não correntes")
        }

    }

    listarEndereco(){
        this.enderecos.forEach(endereco => {
            console.log(endereco)
        });
    }
}

