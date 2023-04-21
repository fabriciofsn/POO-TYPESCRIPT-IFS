import { Pessoa } from "./Pessoa";
import { Filme } from "./Filme";

const pessoa: Pessoa = new Pessoa("Caça", "Rato", 25, true, ["Rua A", "Rua B"]);
const filme: Filme = new Filme("Buster Scruggs", 2018, 18);

console.log(pessoa.nomeCompleto());
console.log(pessoa.nacionalidade());
console.log(pessoa.getIdade());
console.log(pessoa.recuperarEndereco(1));

console.log("---------------------------------------------");

console.log(filme.verificaLancamento(2019));
console.log(filme.verificaFaixaEtaria(19));
