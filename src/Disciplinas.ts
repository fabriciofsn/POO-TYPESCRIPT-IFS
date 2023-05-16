export class Disciplinas {
  private _disciplinas: Array<string> = [];

  constructor(disciplina: Array<string>) {
    this._disciplinas = disciplina;
  }

  public set disciplinas(disciplina: Array<string>) {
    this._disciplinas = disciplina;
  }

  public get disciplinas(): Array<string> {
    return this._disciplinas;
  }
}
