
/*Ejercicio 15
Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
el nuevo sueldo
Categoría 1=10% Categoría 2=20% Categoría 3=30%*/
let sueldo=0
let salario=0
let categoria=prompt("Ingrese su categoría 1 , 2 o 3")

switch (categoria){
    case "1": 
    sueldo=parseFloat(prompt("Ingrese su sueldo"))
    aumento=sueldo*0.1
    salario=sueldo+aumento
    alert("Su sueldo es "+salario+" corresponde a la categoría "+categoria)
    break;

    case "2": 
    sueldo=parseFloat(prompt("Ingrese su sueldo"))
    aumento=sueldo*0.2
    salario=sueldo+aumento
    alert("Su sueldo es "+salario+" corresponde a la categoría "+categoria)
    break;

    case "3": 
    sueldo=parseFloat(prompt("Ingrese su sueldo"))
    aumento=sueldo*0.3
    salario=sueldo+aumento
    alert("Su sueldo es "+salario+" corresponde a la categoría "+categoria)
    break;

    default:
        alert("dato inválido")
}

