import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {
  private salario: number;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    endereco: string[],
    salario: number
  ) {
    super(nome, sobrenome, idade, brasileiro, endereco);
    this.salario = salario;
  }

  recInfoProfessor(): string {
    return `
    ${this.nomeCompleto()}
    ${this.recuperarEndereco(0)}
    ${this.gerarMatricula()}
    Salário: R$${this.salario}
    `;
  }
}
