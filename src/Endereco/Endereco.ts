export class Endereco {
  private _cep: string = "";
  private _estado: string = "";
  private _nCasa: string = "";
  private _rua: string = "";
  private _bairro: string = "";
  private _cidade: string = "";

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

  //GETTER E SETTER CEP
  public set cep(cep: string) {
    this._cep = cep;
  }
  public get cep() {
    return this._cep;
  }

  //GETTER E SETTER ESTADO
  public set estado(estado: string) {
    this._estado = estado;
  }
  public get estado() {
    return this._estado;
  }

  //GETTER E SETTER NUMERO DA CASA
  public set nCasa(n: string) {
    this._nCasa = n;
  }
  public get nCasa() {
    return this._nCasa;
  }

  //GETTER E SETTER RUA
  public set rua(rua: string) {
    this._rua = rua;
  }
  public get rua() {
    return this._rua;
  }

  //GETTER E SETTER BAIRRO
  public set bairro(bairro: string) {
    this._bairro = bairro;
  }
  public get bairro() {
    return this._bairro;
  }

  //GETTER E SETTER CIDADE
  public set cidade(cidade: string) {
    this._cidade = cidade;
  }
  public get cidade() {
    return this._cidade;
  }
}
