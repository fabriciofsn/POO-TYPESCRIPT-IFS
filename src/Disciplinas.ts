export class Disciplinas {
  private _disciplina1: string = "";
  private _disciplina2: string = "";
  private _disciplina3: string = "";
  private _disciplina4: string = "";

  constructor(
    disciplina1: string,
    disciplina2: string,
    disciplina3: string,
    disciplina4: string
  ) {
    this._disciplina1 = disciplina1;
    this._disciplina2 = disciplina2;
    this._disciplina3 = disciplina3;
    this._disciplina4 = disciplina4;
  }

  //GETTER E SETTER DISCIPLINA 1
  public set disciplina1(disciplina: string) {
    this._disciplina1 = disciplina;
  }
  public get disciplina1(): string {
    return this._disciplina1;
  }

  //GETTER E SETTER DISCIPLINA 2
  public set disciplina2(disciplina: string) {
    this._disciplina2 = disciplina;
  }
  public get disciplina2(): string {
    return this._disciplina2;
  }

  //GETTER E SETTER DISCIPLINA 3
  public set disciplina3(disciplina: string) {
    this._disciplina3 = disciplina;
  }
  public get disciplina3() {
    return this._disciplina3;
  }

  //GETTER E SETTER DISCIPLINA 4
  public set disciplina4(disciplina: string) {
    this._disciplina4 = disciplina;
  }
  public get disciplina4(): string {
    return this._disciplina4;
  }
}
