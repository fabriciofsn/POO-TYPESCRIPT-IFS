export class Nota {
  private _valor: number = 0;
  private _peso: number = 0;

  constructor(valor: number, peso: number) {
    this.valor = valor;
    this.peso = peso;
  }

  //GETTER E SETTER VALOR
  public set valor(valor: number) {
    this._valor = valor;
  }
  public get valor(): number {
    return this._valor;
  }

  //GETTER E SETTER PESO
  public set peso(peso: number) {
    this._peso = peso;
  }
  public get peso(): number {
    return this._peso;
  }
}
