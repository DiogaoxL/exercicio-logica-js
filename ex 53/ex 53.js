/*
53) Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".
*/

let c = 1


do {
  if (c % 2 === 0) {
    console.log(c)
  }
  c++
} while (c <= 50);