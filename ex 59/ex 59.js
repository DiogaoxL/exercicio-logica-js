/*
59) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades.
*/

let nome
let idade = 0
let somaIdade = 0
let c = 0

do {
   nome = prompt("Digite seu nome: ")
  idade = parseInt(prompt('Qual sua idade ' + nome + '?'))

  somaIdade = somaIdade + idade

  c++
} while (c < 5)

let media = somaIdade / 5

alert('a media é ' + media + ' e o total das somas ' + somaIdade)
