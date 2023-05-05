"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Pessoa_1 = require("./Pessoa");
class Professor extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, idade, brasileiro, endereco, salario) {
        super(nome, sobrenome, idade, brasileiro, endereco);
        this.salario = salario;
    }
    recInfoProfessor() {
        return `
    ${this.nomeCompleto()}
    ${this.recuperarEndereco(0)}
    ${this.gerarMatricula()}
    Salário: R$${this.salario}
    `;
    }
}
exports.Professor = Professor;
