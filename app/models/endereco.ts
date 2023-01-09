export class Endereco{
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _uf: string;

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string,  uf: string){
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }

    get cep(): string{
        return this._cep;
    }

    get logradouro(): string{
        return this._logradouro;
    }

    get numero(): string{
        return this._numero;
    }

    get complemento(): string{
        return this._complemento;
    }

    get cidade(): string{
        return this._cidade;
    }

    get uf(): string{
        return this._uf;
    }

    //.
    
}
