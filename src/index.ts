// import { Pessoa } from "./Pessoa";
// import { Filme } from "./Filme";
import { Aluno, SituacaoAluno } from "./Aluno";
import { Professor } from "./Professor";

console.log("Dados aluno");

const Jubiscleiton: Aluno = new Aluno(
  "Jubiscleiton",
  "Silva",
  23,
  true,
  "informática",
  ["Rua A", "Rua B"],
  SituacaoAluno.ATIVO
);

console.log(Jubiscleiton.recInfoAluno());

console.log("Dados Professor:");

const professor: Professor = new Professor(
  "Sam",
  "Davis",
  25,
  true,
  ["Rua A", "Rua C"],
  25000
);
console.log(professor.recInfoProfessor());
