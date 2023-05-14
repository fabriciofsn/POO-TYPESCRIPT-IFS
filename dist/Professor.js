"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Pessoa_1 = require("./Pessoa");
class Professor extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, idade, CPF, brasileiro, endereco, salario) {
        super(nome, sobrenome, idade, CPF, brasileiro, endereco);
        this._salario = 0;
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
    // GETTER E SETTER SALARIO
    set salario(salario) {
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
    recInfoProfessor() {
        return `
    ${this.nomeCompleto}
    idade: ${this.idade}
    CPF: ${this.CPF}
    Nacionalidade: ${this.getNacionalidade()}
    Endereço: ${this.enderecos.map(({ cep, estado, nCasa, rua, bairro, cidade }) => {
            return `Cep: ${cep}; Estado: ${estado}; Número casa: ${nCasa};
    Rua: ${rua}; Bairro: ${bairro}; ${cidade}`;
        })}
    Matrícula: ${this.matricula}
    Salário: R$${this.salario}
    `;
    }
}
exports.Professor = Professor;
