"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplinas = void 0;
class Disciplinas {
    constructor(disciplina1, disciplina2, disciplina3, disciplina4) {
        this._disciplina1 = "";
        this._disciplina2 = "";
        this._disciplina3 = "";
        this._disciplina4 = "";
        this._disciplina1 = disciplina1;
        this._disciplina2 = disciplina2;
        this._disciplina3 = disciplina3;
        this._disciplina4 = disciplina4;
    }
    //GETTER E SETTER DISCIPLINA 1
    set disciplina1(disciplina) {
        this._disciplina1 = disciplina;
    }
    get disciplina1() {
        return this._disciplina1;
    }
    //GETTER E SETTER DISCIPLINA 2
    set disciplina2(disciplina) {
        this._disciplina2 = disciplina;
    }
    get disciplina2() {
        return this._disciplina2;
    }
    //GETTER E SETTER DISCIPLINA 3
    set disciplina3(disciplina) {
        this._disciplina3 = disciplina;
    }
    get disciplina3() {
        return this._disciplina3;
    }
    //GETTER E SETTER DISCIPLINA 4
    set disciplina4(disciplina) {
        this._disciplina4 = disciplina;
    }
    get disciplina4() {
        return this._disciplina4;
    }
}
exports.Disciplinas = Disciplinas;
