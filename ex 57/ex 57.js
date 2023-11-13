/*
57) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while".
*/

let c = 1
let n = 7

do {
  c++
} while (c < n && n % c !== 0)

if (c === n) {
  console.log(n, ' é um numero primo')
} else {
  console.log(n, ' nao é um numero primo')
}
