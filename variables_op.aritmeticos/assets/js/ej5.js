// Se crean variables con sus respectivos valores
var num1 = prompt("Ingresa numero 1: ");
var num2 = prompt("Ingresa numero 2: ");
var num3 = prompt("Ingresa numero 3: ");
var num4 = prompt("Ingresa numero 4: ");
var num5 = prompt("Ingresa numero 5: ");
// Se suman las cinco variables y el resultado se guarda en una nueva
var suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
// Se muestra el resultado 
alert(suma);

document.write(" La suma de los cinco N° es: ");
document.write(suma);

// Se obtiene el promedio de los cinco numeros ingresados
var Promedio = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5;
// Se muestra el resultado 
alert(Promedio);

document.write(" El promedio de los cinco N° es: ");
document.write(Promedio);