/*
61) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while".
*/

let n = parseInt(prompt("Digite um numero e descubra a soma dos numeros pares entre ele"))
let c = 1
let soma = 0


do {
  if (c % 2 === 0) {
    soma = soma + c
    console.log(soma)
  }
  c++
} while (c <= n);

