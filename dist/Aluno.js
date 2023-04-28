"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, idade, naturalidade, curso, estaMatricula) {
        this.matricula = "";
        this.nome = nome;
        this.idade = idade;
        this.naturalidade = naturalidade;
        this.curso = curso;
        this.estaMatricula = estaMatricula;
        this.gerarMatricula();
    }
    gerarMatricula() {
        let ano = new Date().getFullYear();
        let matriculaAluno = (Math.random() * 20000).toFixed(0);
        return (this.matricula = `Matrícula do aluno: ${ano}${matriculaAluno}`);
    }
    alunoMatriculado() {
        if (this.estaMatricula) {
            return `Sim`;
        }
        else {
            return `Não`;
        }
    }
    recNumMatricula() {
        return `${this.gerarMatricula()}`;
    }
    recInfoAluno() {
        return `
    Aluno: ${this.nome},
    idade: ${this.idade},
    naturalidade: ${this.naturalidade},
    curso: ${this.curso},
    Está matriculado: ${this.alunoMatriculado()},
    ${this.recNumMatricula()}
    `;
    }
}
exports.Aluno = Aluno;
