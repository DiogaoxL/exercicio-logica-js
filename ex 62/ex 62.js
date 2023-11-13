/*
62) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while".
*/


let n = parseInt(prompt("Digite um numero e descubra a soma dos numeros pares entre ele"))
let c = 1
let soma = 0


do {
  if (c % 2 !== 0) {
    soma = soma + c
    console.log(soma )
  }
  c++
} while (c <= n);