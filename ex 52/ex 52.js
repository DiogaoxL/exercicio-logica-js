/*
52) Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while".
*/

let c = 1
let soma = 0

do {
  soma = soma + c
  c++
} while (c <= 100)

console.log(soma)
