/*
33) Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno".
*/

let turno = "m"

if (turno === "M" || turno === "m") {
  console.log("Bom dia, aluno")
} else if (turno === "V" || turno === "v") {
  console.log("Boa tarde, aluno")
} else {
  console.log("So existe o turno (M ou V) ")
}

