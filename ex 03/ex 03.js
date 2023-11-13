/*
Crie um programa que leia a base e a altura de um triângulo e calcule sua área.
*/

let base = parseInt(prompt("Digite a base do triangulo: "))
let altura = parseInt(prompt("Digite a altura do triangulo: "))

let area = (base * altura) / 2

document.write("a area do trinagulo: " + area)