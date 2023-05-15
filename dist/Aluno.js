"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SituacaoAluno = exports.Aluno = void 0;
const Pessoa_1 = require("./Pessoa");
class Aluno extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, idade, CPF, brasileiro, curso, endereco, situacaoMatricula, disciplinas) {
        super(nome, sobrenome, idade, CPF, brasileiro, endereco);
        this._situacaoMatricula = SituacaoAluno.ATIVO;
        this._curso = "";
        this._disciplinas = [];
        this._situacaoMatricula = situacaoMatricula;
        this._curso = curso;
        this.matricula = this.gerarMatricula();
        this._disciplinas = disciplinas;
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
    //GETTER E SETTER CURSO
    set curso(curso) {
        this._curso = curso;
    }
    get curso() {
        return this._curso;
    }
    //GETTER E SETTER SITUAÇÃO MATRICULA
    set situacaoMatricula(situacao) {
        this._situacaoMatricula = situacao;
    }
    get situacaoMatricula() {
        return this._situacaoMatricula;
    }
    //GETTER DE DISCIPLINAS;
    get disciplicas() {
        return this._disciplinas;
    }
    recInfoAluno() {
        return `
    ${this.nomeCompleto},
    idade: ${this.idade},
    CPF: ${this.CPF}
    naturalidade: ${this.getNacionalidade()},
    curso: ${this.curso},
    Endereço: ${this.enderecos.map((data) => {
            return `Cep: ${data.cep}; Estado: ${data.nCasa}; Rua: ${data.rua}
    Bairro: ${data.bairro}; Cidade: ${data.cidade}`;
        })}
    Situação da matrícula: ${this.situacaoMatricula},
    Matrícula: ${this.matricula},
    
    Disciplinas do aluno:
    ${this._disciplinas.map((data) => {
            return `
        ${data.disciplina1};
        ${data.disciplina2};
        ${data.disciplina3};
        ${data.disciplina4};
      `;
        })}
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
