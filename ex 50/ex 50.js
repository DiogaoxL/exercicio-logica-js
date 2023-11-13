/*
50) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.
*/

let nome = ''
let idade = 0
let somaIDade = 0
let c = 0
let media = 0

while (nome !== 'fim') {
  nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):")

  if (nome !== 'fim') {
    idade = parseInt(prompt('Qual é a idade de ' + nome + '? '))
    somaIDade = somaIDade + idade
    c++
  }
}

if (c > 0) {
  media = somaIDade / c
  alert('A media das idades foi ' + media)
} else {
  alert('Nenhuma pessoa foi inserida.')
}
