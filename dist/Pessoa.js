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
    }
    nomeCompleto() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
    recuperarEndereco(posicao) {
        return `Endereço: ${this.endereco[posicao]}`;
    }
    nacionalidade() {
        let br = "Brasileiro";
        if (this.brasileiro) {
            return `${br}? Sim`;
        }
        else {
            return `${br}? Não`;
        }
    }
    getIdade() {
        return `Idade: ${this.idade}`;
    }
}
exports.Pessoa = Pessoa;
