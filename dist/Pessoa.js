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
    gerarMatricula() {
        let ano = new Date().getFullYear();
        let matriculaAluno = (Math.random() * 200000).toFixed(0);
        return `Matrícula: ${ano}${matriculaAluno}`;
    }
    nomeCompleto() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
    recuperarEndereco(posicao) {
        return `Endereço: ${this.endereco[posicao]}`;
    }
    nacionalidade() {
        if (this.brasileiro) {
            return `É brasileiro`;
        }
        return `Não é brasileiro`;
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
