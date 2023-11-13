/*
17) Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, adolescente, adulto ou idoso.
*/

let idade = 70

if (idade <= 13 ) {
  console.log("criança")
} else {
  if (idade >= 14 && idade < 17 ) {
    console.log("adolescente")
  } else {
    if (idade >= 18 && idade < 65) {
      console.log("adulto")
    }else{
      console.log("idoso")
    }
  }
}