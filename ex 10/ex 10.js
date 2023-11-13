/*
10) Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.
*/
let n = parseInt(prompt("Digite um numero e descubra a sua tabuada: "))
let resultado = 0
let i = 1

while( i <= 10){
  resultado = n * i
  document.write(`${n} X ${i} = ${resultado}` + '<br>')
  i += 1
}