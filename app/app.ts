import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Cargo } from "./models/cargo.js";
import { Cliente } from "./models/cliente.js";
import { ContaCorrente } from "./models/contaCorrente.js";
import { ContaPoupanca } from "./models/contaPoupanca.js";
import { Endereco } from "./models/endereco.js";
import { Funcionario } from "./models/funcionario.js";



const controller = new NegociacaoController();

console.log("PRIMEIRA APLICAÇÃO")
const gerenteCargo = new Cargo("Gerente")
const atendenteCargo = new Cargo("Atendente")

const gerente = new Funcionario("809.006.380-28","MeuGerente","889999999",1000.50,gerenteCargo)
const atendente = new Funcionario("759.655.750-33","MeuAtendente","85121212121",500,atendenteCargo)

console.log(gerente)
console.log(atendente)

console.log("SEGUNDA APLICAÇÃO")

const endereco1 = new Endereco("630000","rua endereco 1","123","Ap 1","Algum Lugar","Estado")
const endereco2 = new Endereco("630000","rua endereco 1","123","Ap 1","Algum Lugar","Estado")
const endereco3 = new Endereco("630000","rua endereco 1","123","Ap 1","Algum Lugar","Estado")
const conta = new ContaCorrente("12345-6",0)

const cliente = new Cliente("321.927.340-85","Cliente3Enderecos","832525252525",true,endereco1,conta)
cliente.adicionarEndereco(endereco2)
cliente.adicionarEndereco(endereco3)

cliente.listarEndereco()

console.log("TERCEIRA APLICAÇÃO")
const conta1 = new ContaCorrente("54321-0",0)
const cliente1 = new Cliente("423.912.323-43","ClienteContaCorrente","1212121212",true,endereco1,conta1)
cliente1.realizarDeposito(conta1,100)
cliente1.realizarDeposito(conta1,100)
cliente1.realizarDeposito(conta1,100)
cliente1.realizarSaque(conta1,50)
cliente1.verificarSaldo(conta1)

console.log("QUARTA APLICAÇÃO")
const contaCorrente = new ContaCorrente("54321-0",0)
const clienteCorrente = new Cliente("423.912.323-43","ClienteContaCorrente","1212121212",true,endereco1,contaCorrente)
clienteCorrente.realizarDeposito(contaCorrente,1000)
const contaPoupanca = new ContaPoupanca("54321-0",0)
const clientePoupanca = new Cliente("423.912.323-43","ClienteContaPoupanca","1212121212",true,endereco1,contaPoupanca)
clientePoupanca.realizarDeposito(contaPoupanca,1000)
clienteCorrente.transferir(contaCorrente,contaPoupanca,500)

clientePoupanca.verificarSaldo(contaPoupanca)
clienteCorrente.verificarSaldo(contaCorrente)

console.log("QUINTA APLICAÇÃO")
const contaPoupancaRentavel = new ContaPoupanca("54321-0",1)
const clientePoupancaRentavel = new Cliente("423.912.323-43","ClienteContaPoupancaRentavel","1212121212",true,endereco1,contaPoupancaRentavel)
