import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
  private situacaoAluno: SituacaoAluno;
  private curso: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    curso: string,
    endereco: Array<string>,
    situacaoAluno: SituacaoAluno
  ) {
    super(nome, sobrenome, idade, brasileiro, endereco);
    this.situacaoAluno = situacaoAluno;
    this.curso = curso;
  }

  private alunoMatriculado(): string {
    return this.situacaoAluno;
  }

  recInfoAluno(): string {
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

export enum SituacaoAluno {
  ATIVO = "Ativo",
  MATRICULADO = "Matriculado",
  TRANCADO = "Trancado",
  CONCLUIDO = "Concluído",
  CANCELADO = "Cancelado",
  FORMANDO = "Formando",
}
