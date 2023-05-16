"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplinas = void 0;
class Disciplinas {
    constructor(disciplina) {
        this._disciplinas = [];
        this._disciplinas = disciplina;
    }
    set disciplinas(disciplina) {
        this._disciplinas = disciplina;
    }
    get disciplinas() {
        return this._disciplinas;
    }
}
exports.Disciplinas = Disciplinas;
