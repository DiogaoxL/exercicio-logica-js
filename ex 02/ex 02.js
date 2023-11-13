//Escreva um programa que leia o raio de um círculo e calcule sua área e perímetro.

let r = parseInt(prompt("Digite o raio do circulo: "))

let area = Math.PI * r * r
let perimetro = 2 * Math.PI * r

document.write("a area do circulo " + area + "<br>")
document.write("o perimetro do circulo " + perimetro + "<br>")
