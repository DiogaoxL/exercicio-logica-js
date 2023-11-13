/*
60) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while".
*/

let n1 = 1
let n2 = 1
let c = 1

do {
  console.log(n1);
  numeroAnterior = n1 + n2
  n1 = n2 
  n2 = numeroAnterior
  c++  
} while (c <= 20);