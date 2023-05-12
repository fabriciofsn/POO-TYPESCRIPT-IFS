"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SituacaoAluno = exports.Aluno = void 0;
const Pessoa_1 = require("./Pessoa");
class Aluno extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, idade, brasileiro, curso, endereco, situacaoAluno) {
        super(nome, sobrenome, idade, brasileiro, endereco);
        this.situacaoAluno = situacaoAluno;
        this.curso = curso;
        this.matricula = this.gerarMatricula();
    }
    alunoMatriculado() {
        return this.situacaoAluno;
    }
    gerarMatricula() {
        let ano = new Date().getFullYear();
        let matricula = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        return Number(`${ano}${matricula}`);
    }
    submeterProjetoPesquisa() {
        console.log("Isso é uma submissão de Projeto");
    }
    submeterProjetoExtensao() {
        console.log("Isso é uma submissão de extensão");
    }
    recInfoAluno() {
        return `
    ${this.nomeCompleto()},
    ${this.getIdade()},
    naturalidade: ${this.nacionalidade()},
    curso: ${this.curso},
    Endereço: ${this.recuperarEndereco()}
    Situação da matrícula: ${this.alunoMatriculado()},
    Matrícula: ${this.matricula}
    `;
    }
}
exports.Aluno = Aluno;
var SituacaoAluno;
(function (SituacaoAluno) {
    SituacaoAluno["ATIVO"] = "Ativo";
    SituacaoAluno["MATRICULADO"] = "Matriculado";
    SituacaoAluno["TRANCADO"] = "Trancado";
    SituacaoAluno["CONCLUIDO"] = "Conclu\u00EDdo";
    SituacaoAluno["CANCELADO"] = "Cancelado";
    SituacaoAluno["FORMANDO"] = "Formado";
})(SituacaoAluno = exports.SituacaoAluno || (exports.SituacaoAluno = {}));
