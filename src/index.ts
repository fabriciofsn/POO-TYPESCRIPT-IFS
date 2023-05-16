import { Aluno, SituacaoAluno } from "./Aluno";
import { Professor } from "./Professor";
import { Endereco } from "./Endereco";
import { Disciplinas } from "./Disciplinas";

console.log("Dados aluno");

const enderecoAluno: Endereco = new Endereco(
  "49300-000",
  "Sergipe",
  "100",
  "Hesnan Do pão doce",
  "Centro",
  "Tobias Barreto"
);
const disciplinas: Disciplinas = new Disciplinas([
  "Programação",
  "Banco de dados",
  "Construção de sites",
  "Engenharia de software",
]);

const Jubiscleiton: Aluno = new Aluno(
  "Jubiscleiton",
  "Silva",
  23,
  "076.578.006-12",
  true,
  "informática",
  [enderecoAluno],
  SituacaoAluno.ATIVO,
  [disciplinas]
);

console.log(Jubiscleiton.recInfoAluno());

console.log("Dados Professor:");
const enderecoProfessor: Endereco = new Endereco(
  "49000-001",
  "Sergipe",
  "200",
  "Louva-a-Deus do ping-pong",
  "Centro",
  "Aracaju"
);
const professor: Professor = new Professor(
  "Sam",
  "Davis",
  25,
  "055.456.789-88",
  true,
  [enderecoProfessor],
  25000
);
console.log(professor.recInfoProfessor());
