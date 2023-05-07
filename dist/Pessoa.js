"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, brasileiro, endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
        Pessoa.qntPessoas++;
    }
    nomeCompleto() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
    recuperarEndereco() {
        return this.endereco.map((en) => `Cep:${en.cep}; Estado: ${en.estado}; Número da casa: ${en.nCasa};
    Rua: ${en.rua}; Bairro: ${en.bairro}; Cidade: ${en.cidade};
      `);
    }
    nacionalidade() {
        return this.brasileiro ? `Brasileiro` : `Estrangeiro`;
    }
    getIdade() {
        return `Idade: ${this.idade}`;
    }
    static recuperarQntPessoas() {
        return this.qntPessoas;
    }
}
exports.Pessoa = Pessoa;
Pessoa.qntPessoas = 0;
