"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SituacaoAluno = exports.Aluno = void 0;
const Pessoa_1 = require("./Pessoa");
class Aluno extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, idade, brasileiro, curso, endereco, situacaoAluno) {
        super(nome, sobrenome, idade, brasileiro, endereco);
        this.situacaoAluno = situacaoAluno;
        this.curso = curso;
    }
    alunoMatriculado() {
        return this.situacaoAluno;
    }
    recInfoAluno() {
        return `
    ${this.nomeCompleto()},
     ${this.getIdade()},
     naturalidade: ${this.nacionalidade()},
     curso: ${this.curso},
     Situação da matrícula: ${this.alunoMatriculado()},
     ${this.gerarMatricula()}
     ${this.recuperarEndereco(1)}
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
    SituacaoAluno["FORMANDO"] = "Formando";
})(SituacaoAluno = exports.SituacaoAluno || (exports.SituacaoAluno = {}));
