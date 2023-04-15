"use strict";
let primeiro;
let sobrenome;
let nomeCompleto;
let idade;
let brasileiro;
let enderecos;
primeiro = "will";
sobrenome = "smith";
idade = 43;
brasileiro = false;
nomeCompleto = `${primeiro} ${sobrenome}`;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];
let exibirNomeCompleto = () => {
    return `Nome completo: ${nomeCompleto}`;
};
let recuperarEnderecos = (posicao) => {
    return enderecos[posicao];
};
console.log(exibirNomeCompleto());
console.log(recuperarEnderecos(1));
