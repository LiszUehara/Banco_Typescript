import { Pessoa } from "./pessoa.js";
export class Funcionario extends Pessoa {
    constructor(cpf, nome, telefone, salario, cargo) {
        super(cpf, nome, telefone);
        this._cargos = [];
        this._salario = salario;
        this.adicionarCargo(cargo);
    }
    autenticar() {
        return true;
    }
    adicionarCargo(cargo) {
        this._cargos.push(cargo);
    }
}
