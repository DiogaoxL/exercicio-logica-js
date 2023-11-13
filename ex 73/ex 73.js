/*
73) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido.
*/

let n = 5
let n1 = 1
let n2 = 0

for (let c = 0; c < n ; c++) {
  numeroAnterior = n1 + n2
  console.log(numeroAnterior)
  n1 = n2
  n2 = numeroAnterior
}
