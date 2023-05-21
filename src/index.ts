import { Aluno, SituacaoAluno } from "./Aluno/Aluno";
import { Professor } from "./Professor/Professor";
import { Endereco } from "./Endereco/Endereco";
import { Disciplina } from "./Disciplina/Disciplinas";

console.log("Dados aluno");

const enderecoAluno: Endereco = new Endereco(
  "49300-000",
  "Sergipe",
  "100",
  "Hesnan Do pão doce",
  "Centro",
  "Tobias Barreto"
);

const disciplina: Disciplina = new Disciplina(
  "Programação, Banco de dados, Engenaria de software, Construção de sites",
  "2060h, 2010h, 3020h, 1025h"
);

const Jubiscleiton: Aluno = new Aluno(
  "Jubiscleiton",
  "Silva",
  23,
  "076.578.006-12",
  true,
  "informática",
  [enderecoAluno],
  SituacaoAluno.ATIVO,
  [disciplina],
  [9, 8, 7, 9],
  [0.6, 0.5, 0.9, 0.7]
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
