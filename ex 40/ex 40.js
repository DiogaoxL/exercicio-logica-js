/*
40) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while".
*/

let c = 1
let n = 5
let r = 0

while (c <= 10) {
  r = n * c

  console.log(`${n} X ${c} = ${r}`)
  c++
}

