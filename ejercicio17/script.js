/*Ejercicio 17
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números pueden ser iguales.*/

let num1=num2=num3=0
num1=parseInt(prompt("Ingrese valor para numero 1: "))
num2=parseInt(prompt("Ingrese valor para numero 2: "))
num3=parseInt(prompt("Ingrese valor para numero 1: "))

if (num1>num2 && num1>num3) { 
    alert("El número "+num1+" es el mayor")
    } else if (num2>num1 && num2>num3) {
        alert("El número "+num2+" es el mayor")}
        else if(num3>num1 && num3>num2) {
            alert("El número "+num3+" es el mayor")
        }
        else{alert("los números son iguales")}
