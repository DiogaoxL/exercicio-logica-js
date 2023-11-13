/*
27) Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais.
*/

let sexo = "m"
let idade = 59

if (sexo === "h" && idade >= 65) {
  console.log("pode aposentar")
} else {
  if (sexo === "m" && idade >= 60) {
    console.log("pode aposentar")
  } else {
    console.log("nao pode aposentar")
  }
}