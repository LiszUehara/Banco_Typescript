export class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }
    get cep() {
        return this._cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    get numero() {
        return this._numero;
    }
    get complemento() {
        return this._complemento;
    }
    get cidade() {
        return this._cidade;
    }
    get uf() {
        return this._uf;
    }
}
