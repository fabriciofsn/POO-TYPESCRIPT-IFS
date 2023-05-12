import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa implements Projeto {
  private _situacaoMatricula: SituacaoAluno = SituacaoAluno.ATIVO;
  private _curso: string = "";
  private matricula: number;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    curso: string,
    endereco: Array<Endereco>,
    situacaoMatricula: SituacaoAluno
  ) {
    super(nome, sobrenome, idade, brasileiro, endereco);
    this._situacaoMatricula = situacaoMatricula;
    this.curso = curso;
    this.matricula = this.gerarMatricula();
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

  //GETTER E SETTER CURSO
  public set curso(curso: string) {
    this._curso = curso;
  }
  public get curso() {
    return this._curso;
  }

  //GETTER E SETTER SITUAÇÃO MATRICULA
  public set situacaoMatricula(situacao: SituacaoAluno) {
    this._situacaoMatricula = situacao;
  }
  public get situacaoMatricula() {
    return this._situacaoMatricula;
  }

  recInfoAluno(): string {
    return `
    ${this.nomeCompleto},
    idade: ${this.idade},
    naturalidade: ${this.getNacionalidade()},
    curso: ${this.curso},
    Endereço: ${this.endereco}
    Situação da matrícula: ${this.situacaoMatricula},
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
  FORMANDO = "Formado",
}
