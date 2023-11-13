/*
54) Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos.
*/

let c = 0
let n = 0
let soma = 0

do {
  n = parseInt(prompt('Digite 5 numeros: '))
  soma = soma + n
  c++
} while (c < 5)

let media = soma / 5

document.write('o total dos numeros digitados foi: ' + soma + ' e a media foi ' + media)
