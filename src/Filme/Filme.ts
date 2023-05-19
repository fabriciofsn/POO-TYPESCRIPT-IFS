export class Filme {
  private nome: string;
  private lancamento: number;
  private faixaEtaria: number;

  constructor(nome: string, lancamento: number, faixaEtaria: number) {
    this.nome = nome;
    this.lancamento = lancamento;
    this.faixaEtaria = faixaEtaria;
  }

  public verificaLancamento(ano: number): string {
    if (ano < this.lancamento) {
      return `O filme ${this.nome} será lançado em ${this.lancamento}`;
    } else {
      return `O filme ${this.nome} foi lançado em ${this.lancamento}`;
    }
  }

  public verificaFaixaEtaria(idade: number): string {
    if (idade < this.faixaEtaria) {
      return `Este filme é proibido para essa pessoa`;
    } else {
      return `Este filme é livre para essa pessoa`;
    }
  }
}
