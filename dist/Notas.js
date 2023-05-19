"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notas = void 0;
class Notas {
    constructor(notas) {
        this._notas = [];
        this._notas = notas;
    }
    set notas(notas) {
        this._notas = notas;
    }
    get notas() {
        return this._notas;
    }
}
exports.Notas = Notas;
