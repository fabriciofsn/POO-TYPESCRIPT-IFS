export abstract class Pessoa {
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private brasileiro: boolean;
  private endereco: Array<string>;
  static qntPessoas: number = 0;

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
    Pessoa.qntPessoas++;
  }

  gerarMatricula(): string {
    let ano = new Date().getFullYear();
    let matriculaAluno = (Math.random() * 200000).toFixed(0);

    return `Matrícula: ${ano}${matriculaAluno}`;
  }

  nomeCompleto(): string {
    return `Nome completo: ${this.nome} ${this.sobrenome}`;
  }

  recuperarEndereco(posicao: number): string {
    return `Endereço: ${this.endereco[posicao]}`;
  }

  nacionalidade(): string {
    if (this.brasileiro) {
      return `É brasileiro`;
    }
    return `Não é brasileiro`;
  }

  getIdade(): string {
    return `Idade: ${this.idade}`;
  }

  static recuperarQntPessoas(): number {
    return this.qntPessoas;
  }
}
