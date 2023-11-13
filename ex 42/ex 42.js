/*
42) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while".
*/

let n = 6
let valor = 2

while (valor < n && n % valor !== 0) {
  valor++
}

if (valor === n) {
  console.log(`${n} é um numero primo`)
} else{
  console.log(`${n} não é um numero primo`)
}