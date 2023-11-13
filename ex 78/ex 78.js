/*
78) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente.
*/

let n = 12345
let ultimoNumero =0

for (let i = 0; n > 0; i++) {
  ultimoNumero = n % 10
  console.log(ultimoNumero)
  n = Math.floor(n / 10)
}