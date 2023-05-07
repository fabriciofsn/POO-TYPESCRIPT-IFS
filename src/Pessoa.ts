import { Endereco } from "./Endereco";

export abstract class Pessoa {
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private brasileiro: boolean;
  private endereco: Array<Endereco>;
  static qntPessoas: number = 0;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    endereco: Array<Endereco>
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.brasileiro = brasileiro;
    this.endereco = endereco;
    Pessoa.qntPessoas++;
  }

  abstract gerarMatricula(): number;

  nomeCompleto(): string {
    return `Nome completo: ${this.nome} ${this.sobrenome}`;
  }

  recuperarEndereco(): string[] {
    return this.endereco.map(
      (en) => `Cep:${en.cep}; Número da casa: ${en.nCasa};
      Cidade: ${en.cidade}; Bairro: ${en.bairro}; Rua: ${en.rua}
      `
    );
  }

  nacionalidade(): string {
    if (this.brasileiro) return `Brasileiro`;
    return `Estrangeiro`;
  }

  getIdade(): string {
    return `Idade: ${this.idade}`;
  }

  static recuperarQntPessoas(): number {
    return this.qntPessoas;
  }
}
