/*
26) Escreva um programa que leia o código de um produto e a quantidade comprada, e exiba o valor total a ser pago. Considere que cada produto tem um preço diferente.
*/

let resp 
let valorTotal = 0
let cod_prod = 0
let qnt_prod = 0
let valor = 0

do {
  cod_prod = Number(prompt('qual o codigo do produto?'))
  qnt_prod = Number(prompt('qual a quantidade do produto?'))
  valor = Number(prompt('informe o valor do produto?'))

  valorTotal = (valor * qnt_prod)
  
  alert(`o total a pagar ${valorTotal} (${cod_prod})`)

  resp = prompt('Deseja continuar comprando? ')
} while (resp === 's')
