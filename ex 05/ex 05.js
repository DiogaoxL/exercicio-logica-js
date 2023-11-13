/*
Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades.
*/
let preco_prod = parseFloat(prompt("Qual o preço do produto? "))
let quantidade_prod = parseFloat(prompt("Quantos produtos você comprou? "))

let valor_total = preco_prod * quantidade_prod

let valor_desconto = 0

let total = 0

if (quantidade_prod > 10) {
  valor_desconto = (valor_total * 10 ) / 100
  total = valor_total - valor_desconto
  document.write(`Desconto aplicado de ${valor_desconto} em compras acima de 10 und` + "<br>")
  document.write(`o valor total a ser pago ${total}`)
} else {
  document.write(`o valor total a ser pago ${valor_total}`)
}