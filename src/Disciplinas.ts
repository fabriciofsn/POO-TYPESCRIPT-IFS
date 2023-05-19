export class Disciplina {
  private _disciplina: string = "";
  private _cargaHoraria: string = "";

  constructor(disciplina: string, cargaHoraria: string) {
    this.disciplina = disciplina;
    this.cargaHoraria = cargaHoraria;
  }

  //GETTER E SETTER CARGA HORÁRIA
  public set cargaHoraria(cargaHoraria: string) {
    this._cargaHoraria = cargaHoraria;
  }
  public get cargaHoraria(): string {
    return this._cargaHoraria;
  }

  //GETTER E SETTER DISCIPLINAS
  public set disciplina(disciplina: string) {
    this._disciplina = disciplina;
  }
  public get disciplina(): string {
    return this._disciplina;
  }
}
