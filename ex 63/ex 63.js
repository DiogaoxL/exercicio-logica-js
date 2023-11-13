/*
63) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while".
*/

let n = 12345 //  Substitua por qualquer numero
let c = 0
let ultimoNumero , excluirUltimoNumero

do {
  ultimoNumero = n % 10
  console.log(ultimoNumero)
  n = Math.floor(n / 10)
} while (n > 0);