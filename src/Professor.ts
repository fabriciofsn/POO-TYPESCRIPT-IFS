import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa implements Projeto {
  private _salario: number = 0;
  private matricula: number;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    brasileiro: boolean,
    endereco: Array<Endereco>,
    salario: number
  ) {
    super(nome, sobrenome, idade, CPF, brasileiro, endereco);
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

  // GETTER E SETTER SALARIO
  public set salario(salario: number) {
    this._salario = salario;
  }
  public get salario() {
    return this._salario;
  }

  recInfoProfessor(): string {
    return `
    ${this.nomeCompleto}
    idade: ${this.idade}
    CPF: ${this.CPF}
    Nacionalidade: ${this.getNacionalidade()}
    Endereço: ${this.enderecos.map(
      ({ cep, estado, nCasa, rua, bairro, cidade }) => {
        return `Cep: ${cep}; Estado: ${estado}; Número casa: ${nCasa};
    Rua: ${rua}; Bairro: ${bairro}; ${cidade}`;
      }
    )}
    Matrícula: ${this.matricula}
    Salário: R$${this.salario}
    `;
  }
}
