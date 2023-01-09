import { Cargo } from "./cargo.js";
import { IUsuario } from "./IUsuario.js";
import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa implements IUsuario{
    private _salario: number;
    private _cargos: Array<Cargo> = [];

    constructor (cpf: string, nome: string, telefone: string, salario: number, cargo: Cargo){
        super(cpf,nome,telefone)
        this._salario = salario;
        this.adicionarCargo(cargo);
    }

    autenticar(): boolean {
        return true;
    }

    adicionarCargo(cargo: Cargo) {
        this._cargos.push(cargo)
    }
}
