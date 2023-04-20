"use strict";
class Pessoa {
    constructor(nome, sobrenome, idade, brasileiro, endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
    }
    nomeCompleto() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
    recuperarEndereco(posicao) {
        return `Endereço: ${this.endereco[posicao]}`;
    }
    nacionalidade() {
        let br = "Brasileiro";
        if (this.brasileiro) {
            return `${br}? Sim`;
        }
        else {
            return `${br}? Não`;
        }
    }
    getIdade() {
        return `Idade: ${this.idade}`;
    }
}
const pessoa = new Pessoa("Caça", "Rato", 25, true, ["Rua A", "Rua B"]);
console.log(pessoa.nomeCompleto());
console.log(pessoa.nacionalidade());
console.log(pessoa.getIdade());
console.log(pessoa.recuperarEndereco(1));
