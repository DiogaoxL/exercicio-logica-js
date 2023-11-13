/*
19) Faça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado. A média para aprovação é 7.
*/

let n1 = parseInt(prompt("digite sua primeira nota: "))
let n2 = parseInt(prompt("digite sua segunda nota: "))
let n3 = parseInt(prompt("digite sua terceira nota: "))

let media = (n1 + n2 + n3) / 3

if (media >= 7) {
  console.log("aprovado sua media foi: " + media)
} else {
  console.log("reprovado sua media foi: " + media)
}
