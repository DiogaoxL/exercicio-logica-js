/*
Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC).
*/ 

let peso = parseFloat(prompt("Qual seu peso? "))
let altura = parseFloat(prompt("Qual sua altura? "))

let imc = peso / (altura * altura)

document.write("seu imc é: " + imc)