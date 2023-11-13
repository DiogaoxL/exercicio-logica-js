/*
32) Escreva um programa que leia a nota de um aluno em uma prova e exiba a sua conceituação conforme a tabela de notas.
*/

let n1 = 10

if (n1 < 6) {
  console.log('I')
} else {
  if (n1 > 6 && n1 < 7.9) {
    console.log('R')
  } else {
    if (n1 > 8 && n1 < 8.9) {
      console.log('B')
    } else {
      if (n1 > 9 && n1 <= 10) {
        console.log('A')
      }
    }
  }
}
