import { Endereco } from "../Endereco/Endereco";

export abstract class Pessoa {
  private _nome: string = "";
  private _sobrenome: string = "";
  private _idade: number = 0;
  private _CPF: string = "";
  private _nacionalidade: boolean = true;
  private _enderecos: Array<Endereco> = [];
  static qntPessoas: number = 0;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    nacionalidade: boolean,
    enderecos: Array<Endereco>
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.CPF = CPF;
    this.nacionalidade = nacionalidade;
    this.enderecos = enderecos;
    Pessoa.qntPessoas++;
  }

  abstract gerarMatricula(): number;

  recuperarEndereco(posicao: number): Endereco {
    return this.enderecos[posicao];
  }

  static recuperarQntPessoas(): number {
    return Pessoa.qntPessoas;
  }

  // GETTER NOME COMPLETO
  public get nomeCompleto(): string {
    return `Nome completo: ${this._nome} ${this._sobrenome}`;
  }

  // SETTER NOME E SOBRENOME
  public set nome(nome: string) {
    this._nome = nome;
  }
  public set sobrenome(sobrenome: string) {
    this._sobrenome = sobrenome;
  }

  // GETTER E SETTER IDADE
  public set idade(idade: number) {
    this._idade = idade;
  }
  public get idade() {
    return this._idade;
  }

  //GETTER E SETTER CPF
  public set CPF(CPF: string) {
    const padraoCPF: RegExp = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (padraoCPF.test(CPF)) {
      this._CPF = CPF;
    } else {
      throw new Error("CPF inválido!");
    }
  }
  public get CPF() {
    return this._CPF;
  }

  // GETTER E SETTER NACIONALIDADE
  public set nacionalidade(nacionalidade: boolean) {
    this._nacionalidade = nacionalidade;
  }

  public getNacionalidade() {
    if (this._nacionalidade) {
      return "Brasileiro";
    } else {
      return `Estrangeiro`;
    }
  }

  //GETTER E SETTER ENDEREÇOS
  public set enderecos(value: Endereco[]) {
    this._enderecos = value;
  }
  public get enderecos(): Endereco[] {
    return this._enderecos;
  }
}
