/*
80) Crie um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades.
*/

let nome
let idade = 0
let soma = 0
let i = 0

for (i = 0; nome != 'fim'; i++) {
  nome = prompt('digite seu nome ')
  if (nome != 'fim') {
    idade = parseInt(prompt('Digite sua idade ' + nome))
    soma = soma + idade
  }
}

let media = soma / i

alert(media)
