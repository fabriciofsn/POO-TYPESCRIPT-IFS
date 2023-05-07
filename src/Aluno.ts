import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa implements Projeto {
  private situacaoAluno: SituacaoAluno;
  private curso: string;
  private matricula: number;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    curso: string,
    endereco: Array<Endereco>,
    situacaoAluno: SituacaoAluno
  ) {
    super(nome, sobrenome, idade, brasileiro, endereco);
    this.situacaoAluno = situacaoAluno;
    this.curso = curso;
    this.matricula = this.gerarMatricula();
  }

  private alunoMatriculado(): string {
    return this.situacaoAluno;
  }

  gerarMatricula(): number {
    let ano = new Date().getFullYear();
    let matricula: number = Math.floor(
      Math.random() * (9999 - 1000 + 1) + 1000
    );
    return Number(`${ano}${matricula}`);
  }

  submeterProjetoPesquisa(): void {
    console.log("Isso é uma submissão de Projeto");
  }

  submeterProjetoExtensao(): void {
    console.log("Isso é uma submissão de extensão");
  }

  recInfoAluno(): string {
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

export enum SituacaoAluno {
  ATIVO = "Ativo",
  MATRICULADO = "Matriculado",
  TRANCADO = "Trancado",
  CONCLUIDO = "Concluído",
  CANCELADO = "Cancelado",
  FORMANDO = "Formando",
}
