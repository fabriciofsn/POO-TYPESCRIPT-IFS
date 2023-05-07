export class Endereco {
  cep: string;
  nCasa: string;
  rua: string;
  bairro: string;
  cidade: string;
  constructor(
    cep: string,
    nCasa: string,
    rua: string,
    bairro: string,
    cidade: string
  ) {
    this.cep = cep;
    this.nCasa = nCasa;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
  }
}
