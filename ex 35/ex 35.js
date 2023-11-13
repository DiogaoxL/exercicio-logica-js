/*
35) Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado".
*/

let n1 = 6
let n2 = 7
let n3 = 8

let media = (n1 + n2 + n3) / 3

if (media >= 7) {
  console.log("Aprovado sua media foi " + media)
} else {
  console.log("Reprovado sua media foi " + media)
}
