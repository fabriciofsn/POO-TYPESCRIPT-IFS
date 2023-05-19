import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import { Disciplina } from "./Disciplinas";
import { Nota } from "./Nota";

export class Aluno extends Pessoa implements Projeto {
  private _situacaoMatricula: SituacaoAluno = SituacaoAluno.ATIVO;
  private _curso: string = "";
  private _matricula: number;
  private _disciplinasAluno: Array<Disciplina> = [];
  private _notas: Nota[] = [];

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    brasileiro: boolean,
    curso: string,
    endereco: Array<Endereco>,
    situacaoMatricula: SituacaoAluno,
    disciplina: Array<Disciplina>
  ) {
    super(nome, sobrenome, idade, CPF, brasileiro, endereco);
    this.situacaoMatricula = situacaoMatricula;
    this.curso = curso;
    this._matricula = this.gerarMatricula();
    this.disciplinas = disciplina;
  }

  gerarMatricula(): number {
    let ano = new Date().getFullYear();
    let matricula: number = Math.floor(
      Math.random() * (9999 - 1000 + 1) + 1000
    );
    return Number(`${ano}${matricula}`);
  }

  public get matricula() {
    return this._matricula;
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
  public set disciplinas(disciplina: Array<Disciplina>) {
    this._disciplinasAluno = disciplina;
  }
  public get disciplinas(): Array<Disciplina> {
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
    
    Disciplinas e carga horária de cada:
    ${this._disciplinasAluno.map(({ disciplina, cargaHoraria }) => {
      return `
      Disciplina: ${disciplina}
      Carga horária: ${cargaHoraria}
     
      `;
    })}
    
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
