/*
24) Crie um programa que leia três números inteiros e exiba-os em ordem crescente.
*/

let n1 = 8
let n2 = 0
let n3 = 1

let maior = 0
let meio = 0
let menor = 0

if (n1 > n2 && n1 > n3) {
  maior = n1
  if (n2 > n3) {
    meio = n2
    menor = n3
  } else {
    meio = n3
    menor = n2
  }
}

if (n2 > n1 && n2 > n3) {
  maior = n2
  if (n1 > n3) {
    meio = n1
    menor = n3
  } else {
    meio = n3
    menor = n1
  }
} 

if (n3 > n1 && n3 > n2) {
  maior = n3
  if (n2 > n1) {
    meio = n2
    menor = n1
  } else {
    meio = n1
    menor = n2
  }
} 

console.log(menor , meio , maior)
