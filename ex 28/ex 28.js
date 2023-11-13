/*
28) Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC.
*/

let peso = 80
let altura = 1.70

let imc = peso / (altura * altura)

console.log(imc)

if (imc < 18.5) {
  console.log("abaixo do peso")
} else if(imc > 18.5 && imc < 30) {
  console.log("peso normal")
} else if (imc > 29.9 && imc < 35){
  console.log("obeso grau |")
}else if(imc > 34.9 && imc < 40){
  console.log("obeso grau ||")
}else if(imc > 39){
  console.log("obeso grau |||")
}