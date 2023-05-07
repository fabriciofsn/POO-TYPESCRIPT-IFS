"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Pessoa_1 = require("./Pessoa");
class Professor extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, idade, brasileiro, endereco, salario) {
        super(nome, sobrenome, idade, brasileiro, endereco);
        this.salario = salario;
        this.matricula = this.gerarMatricula();
    }
    submeterProjetoPesquisa() {
        console.log("Isso é uma submissão de Projeto de Professor");
    }
    submeterProjetoExtensao() {
        console.log("Isso é uma submissão de extensão de Professor");
    }
    gerarMatricula() {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
    }
    recInfoProfessor() {
        return `
    ${this.nomeCompleto()}
    ${this.getIdade()}
    Nacionalidade: ${this.nacionalidade()}
    Endereço: ${this.recuperarEndereco()}
    Matrícula: ${this.matricula}
    Salário: R$${this.salario}
    `;
    }
}
exports.Professor = Professor;
