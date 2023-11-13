/*
71) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número.
*/
let n = 10

for (let i = 1 ; i < n ; i++) {
  
  if (n % i === 0) {
    console.log(i)
  }
  
}