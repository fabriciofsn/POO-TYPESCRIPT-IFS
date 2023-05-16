import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import { Disciplinas } from "./Disciplinas";

export class Aluno extends Pessoa implements Projeto {
  private _situacaoMatricula: SituacaoAluno = SituacaoAluno.ATIVO;
  private _curso: string = "";
  private matricula: number;
  private _disciplinasAluno: Array<Disciplinas> = [];

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    brasileiro: boolean,
    curso: string,
    endereco: Array<Endereco>,
    situacaoMatricula: SituacaoAluno,
    disciplinas: Array<Disciplinas>
  ) {
    super(nome, sobrenome, idade, CPF, brasileiro, endereco);
    this._situacaoMatricula = situacaoMatricula;
    this._curso = curso;
    this.matricula = this.gerarMatricula();
    this._disciplinasAluno = disciplinas;
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

  //GETTER DE DISCIPLINAS;
  public get disciplinas(): Array<Disciplinas> {
    return this._disciplinasAluno;
  }

  recInfoAluno(): string {
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
    ${this._disciplinasAluno.map((data) =>
      data.disciplinas.map((data) => {
        return `${data}`;
      })
    )}
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
