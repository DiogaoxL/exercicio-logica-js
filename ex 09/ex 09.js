/*
Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses.
*/

let deposito = 2000
let taxa = 10
let i = 1
let montante = 0
let jurosFinal = 0

while (i <= 12) {
  
  montante += deposito
  jurosFinal = deposito * (taxa/100)
  i += 1
}

let total = jurosFinal + montante

document.write((`Total: ${total}` + "<br>"+ ` Meses de aplicação: 12 `))