export class Aluno {
  private nome: string;
  private idade: number;
  private curso: string;
  private matricula: string = "";
  private estaMatricula: boolean;
  private naturalidade: string;

  constructor(
    nome: string,
    idade: number,
    naturalidade: string,
    curso: string,
    estaMatricula: boolean
  ) {
    this.nome = nome;
    this.idade = idade;
    this.naturalidade = naturalidade;
    this.curso = curso;
    this.estaMatricula = estaMatricula;
    this.gerarMatricula();
  }

  private gerarMatricula(): string {
    let ano = new Date().getFullYear();
    let matriculaAluno = (Math.random() * 20000).toFixed(0);

    return (this.matricula = `Matrícula do aluno: ${ano}${matriculaAluno}`);
  }

  alunoMatriculado(): string {
    if (this.estaMatricula) {
      return `Sim`;
    } else {
      return `Não`;
    }
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
    Está matriculado: ${this.alunoMatriculado()},
    ${this.recNumMatricula()}
    `;
  }
}
