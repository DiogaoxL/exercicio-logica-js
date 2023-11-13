/*
23) Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos.
*/

let mes = prompt('digite um mes: ')

switch (mes) {
  case 'janeiro':
    console.log('31 dias')
    break

  case 'fevereiro':
    console.log('28 dias')
    break

  case 'março':
    console.log('31 dias')
    break

  case 'abril':
    console.log('30 dias')
    break

  case 'maio':
    console.log('31 dias')
    break

  case 'junho':
    console.log('30 dias')
    break

  case 'julho':
    console.log('31 dias')
    break

  case 'agosto':
    console.log('31 dias')
    break

  case 'setembro':
    console.log('30 dias')
    break

  case 'outubro':
    console.log('31 dias')
    break

  case 'novembro':
    console.log('30 dias')
    break

  case 'dezembro':
    console.log('31 dias')
    break

  default:
    console.log('mes invalido! não utilize abreviação')
    break
}
