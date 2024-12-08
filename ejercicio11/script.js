/*Ejercicios 11
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.*/

let base=parseInt(prompt("Ingrese base del triángulo"))
let altura=parseInt(prompt("Ingrese altura del triángulo"))
let superficie=(base*altura)/2
let hipotenusa=((base/2)**2 + altura**2) **0.5
let perimetro=base+2*hipotenusa
console.log("La superficie del triángulo es: "+superficie+" y el perímetro es: "+perimetro)
