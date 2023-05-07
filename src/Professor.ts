import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa implements Projeto {
  private salario: number;
  private matricula: number;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
    salario: number
  ) {
    super(nome, sobrenome, idade, brasileiro, endereco);
    this.salario = salario;
    this.matricula = this.gerarMatricula();
  }
  submeterProjetoPesquisa(): void {
    console.log("Isso é uma submissão de Projeto de Professor");
  }
  submeterProjetoExtensao(): void {
    console.log("Isso é uma submissão de extensão de Professor");
  }

  gerarMatricula(): number {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
  }

  recInfoProfessor(): string {
    return `
    ${this.nomeCompleto()}
    ${this.getIdade()}
    ${this.nacionalidade()}
    ${this.recuperarEndereco()}
    ${this.matricula}
    
    Salário: R$${this.salario}
    `;
  }
}
