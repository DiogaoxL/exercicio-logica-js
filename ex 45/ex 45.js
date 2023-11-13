/*
45) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".
*/

let proximoNumero = 0
let n1 = 1
let n2 = 0
let c = 0


while (c < 20) {
  proximoNumero = n1 + n2
  console.log(proximoNumero)
  n1= n2
  n2 = proximoNumero
  c++
}