/*
41) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while".
*/

let n = parseInt(prompt("Informe o valor"))
let div = 1

while (div <= n) {
  if (n % div === 0) {
    console.log(div)
  }

  div++
}