export class Pessoa {
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private brasileiro: boolean;
  private endereco: Array<string>;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasileiro: boolean,
    endereco: Array<string>
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.brasileiro = brasileiro;
    this.endereco = endereco;
  }

  nomeCompleto(): string {
    return `Nome completo: ${this.nome} ${this.sobrenome}`;
  }

  recuperarEndereco(posicao: number): string {
    return `Endereço: ${this.endereco[posicao]}`;
  }

  nacionalidade(): string {
    let br: string = "Brasileiro";
    if (this.brasileiro) {
      return `${br}? Sim`;
    } else {
      return `${br}? Não`;
    }
  }

  getIdade(): string {
    return `Idade: ${this.idade}`;
  }
}
