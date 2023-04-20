class Pessoa {
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

  public nomeCompleto(): string {
    return `Nome completo: ${this.nome} ${this.sobrenome}`;
  }

  public recuperarEndereco(posicao: number): string {
    return `Endereço: ${this.endereco[posicao]}`;
  }

  public nacionalidade(): string {
    let br: string = "Brasileiro";
    if (this.brasileiro) {
      return `${br}? Sim`;
    } else {
      return `${br}? Não`;
    }
  }

  public getIdade(): string {
    return `Idade: ${this.idade}`;
  }
}

const pessoa: Pessoa = new Pessoa("Caça", "Rato", 25, true, ["Rua A", "Rua B"]);

console.log(pessoa.nomeCompleto());
console.log(pessoa.nacionalidade());
console.log(pessoa.getIdade());
console.log(pessoa.recuperarEndereco(1));
