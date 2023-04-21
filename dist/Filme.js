"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(nome, lancamento, faixaEtaria) {
        this.nome = nome;
        this.lancamento = lancamento;
        this.faixaEtaria = faixaEtaria;
    }
    verificaLancamento(ano) {
        if (ano < this.lancamento) {
            return `O filme ${this.nome} será lançado em ${this.lancamento}`;
        }
        else {
            return `O filme ${this.nome} foi lançado em ${this.lancamento}`;
        }
    }
    verificaFaixaEtaria(idade) {
        if (idade < this.faixaEtaria) {
            return `Este filme é proibido para essa pessoa`;
        }
        else {
            return `Este filme é livre para essa pessoa`;
        }
    }
}
exports.Filme = Filme;
