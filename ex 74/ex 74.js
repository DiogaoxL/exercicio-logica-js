/*
74) Crie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades.
*/
let nome
let idade = 0
let soma = 0

for (let i = 0; i < 5; i++) {
  nome= prompt("seu nome ") 
  idade= parseInt(prompt("digite sua idade " + nome))
  soma = soma + idade
}

let media = soma / 5

alert(media)