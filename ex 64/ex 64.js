/*
64) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".
*/

let n = 5
let fatorial =1
let c = 1

do {
  fatorial = fatorial * c
  console.log(n + "x" + c + " = " + fatorial);
  c++
} while (c <= n);


