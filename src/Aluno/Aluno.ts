import { Endereco } from "../Endereco/Endereco";
import { Pessoa } from "../Pessoa/Pessoa";
import { Disciplina } from "../Disciplina/Disciplinas";

export class Aluno extends Pessoa implements Projeto {
  private _situacaoMatricula: SituacaoAluno = SituacaoAluno.ATIVO;
  private _curso: string = "";
  private _matricula: number;
  private _disciplinasAluno: Array<Disciplina> = [];
  private _notas: Array<number> = [];
  private _pesos: Array<number> = [];

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    brasileiro: boolean,
    curso: string,
    endereco: Array<Endereco>,
    situacaoMatricula: SituacaoAluno,
    disciplina: Array<Disciplina>,
    notas: number[],
    pesos: number[]
  ) {
    super(nome, sobrenome, idade, CPF, brasileiro, endereco);
    this.situacaoMatricula = situacaoMatricula;
    this.curso = curso;
    this._matricula = this.gerarMatricula();
    this.disciplinas = disciplina;
    this.notas = notas;
    this.pesos = pesos;
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

  //GETTER E SETTER NOTAS
  public set notas(nota: number[]) {
    this._notas = nota;
  }
  public get notas(): number[] {
    return this._notas;
  }

  //GETTER E SETTER PESOS
  public set pesos(pesos: number[]) {
    this._pesos = pesos;
  }
  public get pesos(): number[] {
    return this._notas;
  }

  private _calcularMedia(): number {
    let soma = 0;
    let media = 0;
    for (let nota of this.notas) {
      soma += nota;
    }
    media = soma / this.notas.length;
    return media;
  }

  public get calcularMedia() {
    return this._calcularMedia();
  }

  private _mediaPonderada() {
    let soma = 0;
    let ponderada = 0;
    for (let peso of this.pesos) {
      soma += this.notas[0] * peso;
      ponderada += peso;
    }
    let media = soma / ponderada;
    return media.toFixed(2);
  }

  public get mediaPonderada() {
    return this._mediaPonderada();
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
      Notas: ${this.notas.map((nota) => nota)}
      Média Aritmética: ${this.calcularMedia}
      Média Ponderada: ${this.mediaPonderada}
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
