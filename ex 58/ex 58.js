/*
58) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "do-while".
*/
let n = 5
let n1 = 1
let n2 = 1
let c = 1

do {
  console.log(n1);
  numeroAnterior = n1 + n2
  n1 = n2 
  n2 = numeroAnterior
  c++  
} while (c <= n);
