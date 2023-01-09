import { Pessoa } from "./pessoa.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { ContaCorrente } from "./contaCorrente.js";
export class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip, endereco, conta) {
        super(cpf, nome, telefone);
        this.enderecos = [];
        this.contas = [];
        this._vip = vip;
        this.adicionarConta(conta);
        this.adicionarEndereco(endereco);
    }
    autenticar() {
        return true;
    }
    get vip() {
        return this._vip;
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    realizarDeposito(contaUsada, valor) {
        const id = this.contas.indexOf(contaUsada);
        this.contas[id].depositar(valor);
    }
    realizarSaque(contaUsada, valor) {
        const id = this.contas.indexOf(contaUsada);
        this.contas[id].sacar(valor);
    }
    verificarSaldo(contaUsada) {
        const id = this.contas.indexOf(contaUsada);
        const conta = this.contas[id];
        if (conta instanceof ContaPoupanca || conta instanceof ContaCorrente) {
            conta.imprimirSaldo();
        }
    }
    transferir(contaOrigem, contaDestino, valor) {
        const id = this.contas.indexOf(contaOrigem);
        const conta = this.contas[id];
        if (conta instanceof ContaCorrente) {
            conta.transferir(contaDestino, valor);
        }
        else {
            console.log("Não é possível transferir em contas não correntes");
        }
    }
    listarEndereco() {
        this.enderecos.forEach(endereco => {
            console.log(endereco);
        });
    }
}
