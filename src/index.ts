// import { Pessoa } from "./Pessoa";
// import { Filme } from "./Filme";
import { Aluno, SituacaoAluno } from "./Aluno";
import { Professor } from "./Professor";
import { Endereco } from "./Endereco";

console.log("Dados aluno");

const enderecoAluno = new Endereco(
  "49300-000",
  "100",
  "Hesnan Do pão doce",
  "Centro",
  "Tobias barreto"
);
const Jubiscleiton: Aluno = new Aluno(
  "Jubiscleiton",
  "Silva",
  23,
  true,
  "informática",
  [enderecoAluno],
  SituacaoAluno.ATIVO
);

console.log(Jubiscleiton.recInfoAluno());

console.log("Dados Professor:");
const enderecoProfessor = new Endereco(
  "49000-001",
  "200",
  "Louva-a-Deus do ping-pong",
  "Centro",
  "Aracaju"
);
const professor: Professor = new Professor(
  "Sam",
  "Davis",
  25,
  true,
  [enderecoProfessor],
  25000
);
console.log(professor.recInfoProfessor());
