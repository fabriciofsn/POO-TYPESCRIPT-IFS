import { Endereco } from "./Endereco";

export abstract class Pessoa {
  private _nome: string = "";
  private _sobrenome: string = "";
  private _idade: number = 0;
  private _nacionalidade: boolean = true;
  private _enderecos: Array<Endereco> = [];
  static qntPessoas: number = 0;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    nacionalidade: boolean,
    endereco: Array<Endereco>
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nacionalidade = nacionalidade;
    this._enderecos = endereco;
    Pessoa.qntPessoas++;
  }

  abstract gerarMatricula(): number;

  // private recuperarEndereco(): string[] {
  //   return this._endereco.map(({ cep, estado, nCasa, rua, bairro, cidade }) => {
  //     return `Cep: ${cep}; Estado: ${estado}; Número da casa: ${nCasa};
  //   Rua: ${rua}; Bairro: ${bairro}; Cidade: ${cidade};
  //     `;
  //   });
  // }

  static recuperarQntPessoas(): number {
    return this.qntPessoas;
  }

  //GETTER E SETTER ENDEREÇO
  public set endereco(posicao: number) {
    this._enderecos;
  }

  // GETTER NOME COMPLETO
  public get nomeCompleto(): string {
    return `Nome completo: ${this._nome} ${this._sobrenome}`;
  }

  // GETTER E SETTER NOME E SOBRENOME
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

  //GETTER ENDEREÇO
  // public get endereco() {
  //   // return this.recuperarEndereco();
  // }
}
