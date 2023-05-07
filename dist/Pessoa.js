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
        return this.endereco.map((en) => `Cep:${en.cep}; Número da casa: ${en.nCasa};
      Cidade: ${en.cidade}; Bairro: ${en.bairro}; Rua: ${en.rua}
      `);
    }
    nacionalidade() {
        if (this.brasileiro)
            return `Brasileiro`;
        return `Estrangeiro`;
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
