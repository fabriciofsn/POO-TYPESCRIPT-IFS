"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, CPF, nacionalidade, enderecos) {
        this._nome = "";
        this._sobrenome = "";
        this._idade = 0;
        this._CPF = "";
        this._nacionalidade = true;
        this._enderecos = [];
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.CPF = CPF;
        this.nacionalidade = nacionalidade;
        this.enderecos = enderecos;
        Pessoa.qntPessoas++;
    }
    recuperarEndereco(posicao) {
        return this.enderecos[posicao];
    }
    static recuperarQntPessoas() {
        return Pessoa.qntPessoas;
    }
    // GETTER NOME COMPLETO
    get nomeCompleto() {
        return `Nome completo: ${this._nome} ${this._sobrenome}`;
    }
    // SETTER NOME E SOBRENOME
    set nome(nome) {
        this._nome = nome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    // GETTER E SETTER IDADE
    set idade(idade) {
        this._idade = idade;
    }
    get idade() {
        return this._idade;
    }
    //GETTER E SETTER CPF
    set CPF(CPF) {
        const padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (padraoCPF.test(CPF)) {
            this._CPF = CPF;
        }
        else {
            throw new Error("CPF inválido!");
        }
    }
    get CPF() {
        return this._CPF;
    }
    // GETTER E SETTER NACIONALIDADE
    set nacionalidade(nacionalidade) {
        this._nacionalidade = nacionalidade;
    }
    getNacionalidade() {
        if (this._nacionalidade) {
            return "Brasileiro";
        }
        else {
            return `Estrangeiro`;
        }
    }
    //GETTER E SETTER ENDEREÇOS
    set enderecos(value) {
        this._enderecos = value;
    }
    get enderecos() {
        return this._enderecos;
    }
}
exports.Pessoa = Pessoa;
Pessoa.qntPessoas = 0;
