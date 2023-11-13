/*
70) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor.
*/
let n = 5 //digite qualquer numero e exiba sua tabuada
let resul

for (let i = 0; i <= 10; i++) {
  resul = n * i
  console.log(`${n} X ${i} = ${resul}`)
}