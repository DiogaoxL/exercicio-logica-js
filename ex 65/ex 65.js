/*
65) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.
*/

let nome = ''
let idade = 0
let soma = 0
let media = 0
let c = 0

do {
  nome = prompt('Qual seu nome (digite fim para encerrar)')

  if (nome.toLocaleLowerCase() !== 'fim') {
    idade = parseInt(prompt('Qual sua idade ' + nome))
    soma = soma + idade
    c++
  }
} while (nome.toLocaleLowerCase() !== 'fim')

if (c > 0) {
  media = soma / c
  alert(
    `foram inseridas ${c} de pessoas e a soma das idades foi ${soma} resultando na media das idades que foi ${media}`
  )
} else {
  alert('Nenhuma pessoa foi inserida.')
}
