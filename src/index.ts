// import { Pessoa } from "./Pessoa";
// import { Filme } from "./Filme";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

// const pessoa: Pessoa = new Pessoa("Caça", "Rato", 25, true, ["Rua A", "Rua B"]);
// const busterScruggs: Filme = new Filme("Buster Scruggs", 2018, 18);

// console.log(pessoa.nomeCompleto());
// console.log(pessoa.nacionalidade());
// console.log(pessoa.getIdade());
// console.log(pessoa.recuperarEndereco(1));
// console.log(Pessoa.recuperarQntPessoas());

// console.log("---------------------------------------------");

// console.log(busterScruggs.verificaLancamento(2019));
// console.log(busterScruggs.verificaFaixaEtaria(19));

// console.log("---------------------------------------------");

const aluno: Aluno = new Aluno(
  "Jubiscleiton",
  23,
  "Hindu",
  "informatica",
  true
);

console.log(aluno.recInfoAluno());
console.log("---------------------------------------------");

const professor: Professor = new Professor(
  "Sam",
  25,
  "Masculino",
  "08576846595",
  "Rua 1 ao lado rua 2"
);
console.log(professor.recInfoProfessor());
