/*
22) Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%.
*/

let salarioAtual = parseInt(prompt('Digite seu salario atual: '))
let bonus = 0
let novoSalario = 0

if (salarioAtual >= 2000) {
  bonus = (salarioAtual * 10) / 100
  novoSalario = salarioAtual + bonus
  console.log('seu bonus foi: ' + bonus)
  console.log('seu novo salario é: ' + novoSalario)

} else if (salarioAtual < 2000) {
  bonus = (salarioAtual * 5) / 100
  novoSalario = salarioAtual + bonus
  console.log('seu bonus foi: ' + bonus)
  console.log('seu novo salario é: ' + novoSalario)
}






