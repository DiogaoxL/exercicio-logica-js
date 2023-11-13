/*
43) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while".
*/

let n = 10

let proximoNumero = 0
let n1 = 1
let n2 = 0
let c = 0


while (c < n) {
  proximoNumero = n1 + n2
  console.log(proximoNumero)
  n1= n2
  n2 = proximoNumero
  c++
}