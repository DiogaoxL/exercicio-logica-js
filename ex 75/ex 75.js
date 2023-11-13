/*
75) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci.
*/

let n1 = 1
let n2 = 0

for (let c = 0; c < 20 ; c++) {
  numeroAnterior = n1 + n2
  console.log(numeroAnterior)
  n1 = n2
  n2 = numeroAnterior
}
