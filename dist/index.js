"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aluno_1 = require("./Aluno");
const Professor_1 = require("./Professor");
const Endereco_1 = require("./Endereco");
const Disciplinas_1 = require("./Disciplinas");
console.log("Dados aluno");
const enderecoAluno = new Endereco_1.Endereco("49300-000", "Sergipe", "100", "Hesnan Do pão doce", "Centro", "Tobias Barreto");
const disciplinas = new Disciplinas_1.Disciplinas([
    "Programação",
    "Banco de dados",
    "Construção de sites",
    "Engenharia de software",
]);
const Jubiscleiton = new Aluno_1.Aluno("Jubiscleiton", "Silva", 23, "076.578.006-12", true, "informática", [enderecoAluno], Aluno_1.SituacaoAluno.ATIVO, [disciplinas], []);
console.log(Jubiscleiton.recInfoAluno());
console.log("Dados Professor:");
const enderecoProfessor = new Endereco_1.Endereco("49000-001", "Sergipe", "200", "Louva-a-Deus do ping-pong", "Centro", "Aracaju");
const professor = new Professor_1.Professor("Sam", "Davis", 25, "055.456.789-88", true, [enderecoProfessor], 25000);
console.log(professor.recInfoProfessor());
