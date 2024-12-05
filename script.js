// /*Ejercicio 1
// Mostrar por consola, tu nombre, apellido, comisión y hobbies*/

// let nombre= "Gisela"
// let apellido= "Gindelli"
// let comision= "JS24234"
// let hobbies= ['andar en bici','artesanías']

// console.log (
//     "Mi nombre es " + nombre + " " + apellido + ", soy de la comisión "+comision+ ". Mis hobbies son: "+hobbies[0]+ " y "+hobbies[1]
// )

// /*Ejercicio 2
// Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
// Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir
// en la consola debes utilizar el método console.log().*/

// let frase=prompt("Por favor ingrese una frase motivadora: ")
// console.log("Frase: "+frase)

// /*Ejercicio 3
// Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.*/
// let usuario=prompt("Ingrese su nombre por favor")
// console.log("Hola "+usuario+"!")

// /*Ejercicio 4
// Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por consola*/

// let nombre4=prompt("Ingrese su nombre")
// let apellido4=prompt("Ingrese su apellido")
// console.log("Hola "+nombre4+" "+apellido4)

// /*Ejercicio 5
// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años".*/

// let nacimiento=parseInt(prompt("Ingrese su año de nacimiento"))
// let actual=parseInt(prompt("Ingrese el año actual"))
// let edad=actual-nacimiento
// console.log("Tenés "+edad+ " años")


// /*
// Ejercicio 6
// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
// grasa de una persona.
// El BMI se calcula con la siguiente formula:
// peso / altura^2
// Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu
// BMI es X".*/

// let peso=parseInt(prompt("Ingrese su peso"))
// let altura=parseInt(prompt("Ingrese su altura en cm"))
// altura=altura/100
// imc=peso/(altura**2)
// console.log("Su IMC es: "+imc)

// /*Ejercicio 7
// Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en tu casa. Mostrar el valor de la variable por la consola.*/

// let cantidadDeVentanas = 4
// console.log("En mi casa tengo "+cantidadDeVentanas+" ventanas.")

// /*Ejercicio 8
// Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de
// la variable por la consola.*/

// let soyHumano=true
// console.log("Eres Humano? "+soyHumano)

// /*Ejercicio 9
// Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola.*/

// let miGustoDePizza="Rúcula"
// console.log("Me gusta la pizza de: "+miGustoDePizza)


// /*Ejercicio 10
// Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable.*/
// let mismaVar=false
// console.log(mismaVar)
// mismaVar="Hola"
// console.log(mismaVar)
// mismaVar=0
// console.log(mismaVar)
// mismaVar=false
// console.log("Minions")

// /*Ejercicios 11
// Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.*/

// let base=parseInt(prompt("Ingrese base del triángulo"))
// let altura=parseInt(prompt("Ingrese altura del triángulo"))
// let superficie=(base*altura)/2
// let hipotenusa=((base/2)**2 + altura**2) **0.5
// let perimetro=base+2*hipotenusa
// console.log("La superficie del triángulo es: "+superficie+" y el perímetro es: "+perimetro)

// /*Ejercicio 12
// Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a
// kilogramos*/
// let peso=parseFloat(prompt("Ingrese su peso en libras"))
// console.log("Su peso en kilogramos es: "+peso*0.453592)

// /*Ejercicio 13
// Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre
// en la consola.*/

// let sueldo=parseFloat(prompt("Ingrese su sueldo"))
// let aumento=(sueldo*15/100)+sueldo
// console.log("Sueldo con aumento "+aumento)

// /*Ejercicio 14
// Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta
// “aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario
// */

// let nota=parseFloat(prompt("Ingrese una su nota"))
// if (nota>=7){alert("APROBADO")}
//     else {alert("REPROBADO")}

// /*Ejercicio 15
// Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
// aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
// el nuevo sueldo
// Categoría 1=10% Categoría 2=20% Categoría 3=30%*/
// let sueldo=0
// let salario=0
// let categoria=prompt("Ingrese su categoría")

// switch (categoria){
//     case "1": 
//     sueldo=parseFloat(prompt("Ingrese su sueldo"))
//     aumento=sueldo*0.1
//     salario=sueldo+aumento
//     alert("Su sueldo es "+salario+" corresponde a la categoría "+categoria)
//     break;

//     case "2": 
//     sueldo=parseFloat(prompt("Ingrese su sueldo"))
//     aumento=sueldo*0.2
//     salario=sueldo+aumento
//     alert("Su sueldo es "+salario+" corresponde a la categoría "+categoria)
//     break;

//     case "3": 
//     sueldo=parseFloat(prompt("Ingrese su sueldo"))
//     aumento=sueldo*0.3
//     salario=sueldo+aumento
//     alert("Su sueldo es "+salario+" corresponde a la categoría "+categoria)
//     break;

//     default:
//         alert("dato inválido")
// }


// /*Ejercicio 16
// Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
// matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
// la palabra “no aprobado” en caso contrario*/

// let matricula = parseInt(prompt("Ingrese su matrícula (5digitos)"))
// while (matricula<10000 || matricula>99999){
//     alert("dato incorrecto!")
//     matricula = parseInt(prompt("Ingrese su matrícula(5dígitos)")) }
// let notas=[] //array con notas
// let suma=0

// for (i=0;i<5;i++)
//      {let nota=parseFloat(prompt("Ingrese su nota "+[i+1]))
//         notas.push(nota) //pido la nota y la agrego al array
//         suma+=nota //sumo en el acumulador
//      }
// promedio=suma/5
// console.log(notas)
// if (promedio>=7) { alert("El promedio del alumno " + matricula+ " es "+promedio+ " esta APROBADO")}
// else{
//     alert("El promedio del alumno " + matricula+ " es "+promedio+ " es DESAPROBADO")}

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
