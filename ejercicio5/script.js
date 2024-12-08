/*Ejercicio 5
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años".*/

let nacimiento=parseInt(prompt("Ingrese su año de nacimiento"))
let actual=parseInt(prompt("Ingrese el año actual"))
let edad=actual-nacimiento
console.log("Tenés "+edad+ " años")

