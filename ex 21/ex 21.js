/*
21) Crie um programa que leia a idade de um grupo de pessoas e exiba quantas são menores de idade e quantas são maiores de idade.
*/


let resposta
let maiorDeIdade = 0
let menorDeIdade = 0
let totalDePessoas = 0

do {
  let idade = parseInt(prompt('qual sua idade? '))

  if (idade >= 18) {
    maiorDeIdade++
  } else {
    menorDeIdade++
  }
  totalDePessoas++

  resposta = prompt("Deseja inserir a idade de mais uma pessoa? (s/n)")
} while (resposta === "s");

alert(`o numero total de pessoas foi: ${totalDePessoas} desses sao ${maiorDeIdade} maiores de idade e ${menorDeIdade} menor de idade`)