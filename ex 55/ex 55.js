/*
55) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while".
*/

let c = 1
let n = 5
let resul = 0

do {
  resul = n * c
  console.log(n , " X " , c , " =" , resul) 
  c++
} while (c <= 10);