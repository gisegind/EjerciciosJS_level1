


/*Ejercicio 16
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
la palabra “no aprobado” en caso contrario*/

let matricula = parseInt(prompt("Ingrese su matrícula (5digitos)"))
while (matricula<10000 || matricula>99999){
    alert("dato incorrecto!")
    matricula = parseInt(prompt("Ingrese su matrícula(5dígitos)")) }
let notas=[] //array con notas
let suma=0

for (i=0;i<5;i++)
     {let nota=parseFloat(prompt("Ingrese su nota "+[i+1]))
        notas.push(nota) //pido la nota y la agrego al array
        suma+=nota //sumo en el acumulador
     }
promedio=suma/5
console.log(notas)
if (promedio>=7) { alert("El promedio del alumno " + matricula+ " es "+promedio+ " esta APROBADO")}
else{
    alert("El promedio del alumno " + matricula+ " es "+promedio+ " es DESAPROBADO")}
