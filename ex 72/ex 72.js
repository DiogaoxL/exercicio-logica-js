/*
72) Faça um programa que leia um número inteiro e exiba se ele é um número primo.
*/

let numero = 3
let primo = true;

if (numero === 1) {
  primo = true;
} else {
  for (let i = 2 ; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
    }
  }
}

if (primo) {
  console.log(`${numero} é um número primo.`);
} else {
  console.log(`${numero} não é um número primo.`);
}