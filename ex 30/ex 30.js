/*
30) Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.
*/

let quant = 12
let valor = 0

if (quant < 12) {
  valor = 0.5 * quant
} else {  
  if (quant >= 12) {
    valor = 0.4 * quant
  }
}

console.log(`o total a ser pago: ${valor}`)
