/*
15) Crie um programa que leia o salário de um funcionário e calcule o novo salário com um aumento de 15%.
*/ 

let salario = parseFloat(prompt("Qual seu salario? "))

let aumento = ((salario * 15 ) / 100) + salario

console.log("seu novo salario é: " + aumento)