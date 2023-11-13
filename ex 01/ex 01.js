/*
Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.
*/

let n1 = Number(prompt('Digite um numero para fazer os 4 calculos basicos: '))
let n2 = Number(prompt('Digite outro para fazer os 4 calculos basicos: '))

let soma = n1 + n2
let subtracao = n1 - n2
let multiplicacao = n1 * n2
let divisao = n1 / n2

document.write('A soma é ' + soma + '<br>')
document.write('A subtração é ' + subtracao + '<br>')
document.write('A multiplicação é ' + multiplicacao + '<br>')
document.write('A divisão é ' + divisao + '<br>')
