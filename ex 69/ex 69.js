/*
69) Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos.
*/
let n = 0
let soma = 0

for (let i = 0; i < 5; i++) {
  n = Number(prompt('Digite alguns numeros: '))
  soma = soma + n
}

let media = soma / 5

alert('a soma total foi ' + soma + ' a media foi ' + media)
