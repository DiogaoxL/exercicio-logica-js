/*
Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base.
*/

let salario = parseFloat(prompt("Qual seu salario base?")) 
let salario_liquido = ((salario * 5 ) / 100) + salario

document.write(`seu salario liquido é: ${salario_liquido}`)