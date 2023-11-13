/*
29) Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.
*/

let nome = "diogo"
let nota = Number(prompt("Qual sua nota? "))

if (nota >= 7) {
  console.log("aprovado")
} else {
  console.log("reprovado")
}
