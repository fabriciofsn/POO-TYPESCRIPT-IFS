export class Aluno {
  private nome: string;
  private idade: number;
  private curso: string;
  private matricula: string = "";
  private situacao: SituacaoAluno;
  private naturalidade: string;

  constructor(
    nome: string,
    idade: number,
    naturalidade: string,
    curso: string,
    situacao: SituacaoAluno
  ) {
    this.nome = nome;
    this.idade = idade;
    this.naturalidade = naturalidade;
    this.curso = curso;
    this.situacao = situacao;
    this.gerarMatricula();
  }

  private gerarMatricula(): string {
    let ano = new Date().getFullYear();
    let matriculaAluno = (Math.random() * 200000).toFixed(0);

    return (this.matricula = `Matrícula do aluno: ${ano}${matriculaAluno}`);
  }

  alunoMatriculado(): string {
    return this.situacao;
  }

  recNumMatricula(): string {
    return `${this.gerarMatricula()}`;
  }

  recInfoAluno(): string {
    return `
    Aluno: ${this.nome},
    idade: ${this.idade},
    naturalidade: ${this.naturalidade},
    curso: ${this.curso},
    Situação da matrícula: ${this.alunoMatriculado()},
    ${this.recNumMatricula()}
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
