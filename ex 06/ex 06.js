/*
Crie um programa que leia um número inteiro e exiba se ele é par ou ímpar.
*/

let n1 = parseInt(prompt("é par ou impar? Digite um numero e descubra "))

if (n1 % 2 === 0 ) {
  document.write("par")
} else {
  document.write("impar")
}