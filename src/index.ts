let primeiro: string;
let sobrenome: string;
let nomeCompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: Array<string>;

primeiro = "will";
sobrenome = "dos Santos";
idade = 43;
brasileiro = false;
nomeCompleto = `${primeiro} ${sobrenome}`;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];

let exibirNomeCompleto = (): string => {
  return `Nome completo: ${nomeCompleto}`;
};

let recuperarEnderecos = (posicao: number): string => {
  return enderecos[posicao];
};

console.log(exibirNomeCompleto());
console.log(recuperarEnderecos(1));
