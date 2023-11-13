/*
46) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while".
*/

let n = 10
let soma = 0
let c = 1

while (c < n) {
  if (c % 2 === 0 ) {
    soma = soma + c
  }
  c++
}

console.log(soma)