
export abstract class Pessoa{
    private _cpf: string;
    private _nome: string;
    private _telefone: string;

    constructor(cpf: string, nome: string, telefone: string){
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }

    get cpf(){
        return this._cpf;
    }

    get nome(){
        return this._nome;
    }

    get telefone(){
        return this._telefone;
    }

    

    
}