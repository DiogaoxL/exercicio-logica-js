/*
56) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".
*/

let c = 1 
let n = parseInt(prompt("Digite um numero e descubra seus divisores"))

do {
  if (n % c === 0) {
    console.log("esse numero " , c , " é divisel por" , n )
  }
  c++
} while (c < n);