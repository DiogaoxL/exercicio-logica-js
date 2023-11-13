/*
76) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido.
*/
let n = 8 // digite qualquer numero
let soma = 0
for (let i = 0; i < n; i++) {

  if (i % 2 === 0 ) {
    soma = soma + i
  }
  
}

console.log(soma)