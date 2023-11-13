/*
48)Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while".
*/

let numeroInteiro = parseInt(prompt("Digite um numero: "))
let ultimoNumero = 0

while (numeroInteiro > 0) {
  ultimoNumero = numeroInteiro % 10 // pegando o ultimo digito

  console.log(ultimoNumero) // lendo o ultimo numero

  numeroInteiro = Math.floor(numeroInteiro / 10) // excluindo o ultimo numero
}
