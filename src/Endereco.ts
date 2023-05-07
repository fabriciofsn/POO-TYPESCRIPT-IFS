export class Endereco {
  cep: string;
  estado: string;
  nCasa: string;
  rua: string;
  bairro: string;
  cidade: string;

  constructor(
    cep: string,
    estado: string,
    nCasa: string,
    rua: string,
    bairro: string,
    cidade: string
  ) {
    this.cep = cep;
    this.estado = estado;
    this.nCasa = nCasa;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
  }
}
