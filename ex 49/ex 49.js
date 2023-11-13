/*
49) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".
*/
let numeroDigitado = parseInt(prompt("digite um numero e descubra seu fatorial"))
let c = numeroDigitado
let fatorial = 1

while (c >= 1) {
  fatorial = fatorial * c
  c--
}
console.log(fatorial)