"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, estado, nCasa, rua, bairro, cidade) {
        this._cep = "";
        this._estado = "";
        this._nCasa = "";
        this._rua = "";
        this._bairro = "";
        this._cidade = "";
        this.cep = cep;
        this.estado = estado;
        this.nCasa = nCasa;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    //GETTER E SETTER CEP
    set cep(cep) {
        this._cep = cep;
    }
    get cep() {
        return this._cep;
    }
    //GETTER E SETTER ESTADO
    set estado(estado) {
        this._estado = estado;
    }
    get estado() {
        return this._estado;
    }
    //GETTER E SETTER NUMERO DA CASA
    set nCasa(n) {
        this._nCasa = n;
    }
    get nCasa() {
        return this._nCasa;
    }
    //GETTER E SETTER RUA
    set rua(rua) {
        this._rua = rua;
    }
    get rua() {
        return this._rua;
    }
    //GETTER E SETTER BAIRRO
    set bairro(bairro) {
        this._bairro = bairro;
    }
    get bairro() {
        return this._bairro;
    }
    //GETTER E SETTER CIDADE
    set cidade(cidade) {
        this._cidade = cidade;
    }
    get cidade() {
        return this._cidade;
    }
}
exports.Endereco = Endereco;
