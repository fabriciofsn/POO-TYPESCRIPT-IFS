export class Professor {
  private nome: string;
  private idade: number;
  private sexo: string;
  private cpf: string;
  private endereco: string;

  constructor(
    nome: string,
    idade: number,
    sexo: string,
    cpf: string,
    endereco: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.cpf = cpf;
    this.endereco = endereco;
  }

  gerarSiape(): string {
    let ano = new Date().getFullYear();
    let matricula = `${ano}${(Math.random() * 20000).toFixed(0)}`;
    return matricula;
  }

  recInfoProfessor(): string {
    return `
      Nome do professor: ${this.nome},
      Idade: ${this.idade},
      Sexo: ${this.sexo},
      CPF: ${this.cpf},
      endereço: ${this.endereco},
      Matrícula: ${this.gerarSiape()}
    `;
  }
}
