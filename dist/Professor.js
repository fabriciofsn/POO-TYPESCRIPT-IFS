"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
class Professor {
    constructor(nome, idade, sexo, cpf, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    gerarSiape() {
        let ano = new Date().getFullYear();
        let matricula = `${ano}${(Math.random() * 20000).toFixed(0)}`;
        return matricula;
    }
    recInfoProfessor() {
        return `
      Nome do professor: ${this.nome},
      Idade: ${this.idade},
      Sexo: ${this.sexo},
      CPF: ${this.cpf},
      endereço: ${this.endereco},
      Matrícula: ${this.gerarSiape()}
    `;
    }
}
exports.Professor = Professor;
