// se crean constantes
const anho = 365;
const semana = 7;

// Se crea variable

// Se calculan años/semanas/dias y el resultado se guarda en una nueva
dias = prompt("Ingresa N° de dias: ");
var anhos = (parseInt(dias) / parseInt(anho));
//var diasa = parseInt(dias) - parseInt(anho);
var semanas = (parseInt(dias) - parseInt(anho)) / parseInt(semana);
var diass = (parseInt(dias) - parseInt(anho)) - (parseInt(semana) * parseInt(semanas));
// Se muestra el resultado 
alert(Math.floor(anhos));
alert(Math.floor(semanas));

document.write("El numero de años es: ");
document.write(Math.floor(anhos));
document.write("El numero de semanas es:");
document.write(Math.floor(semanas));
document.write("El numero de dias es:");
document.write(Math.floor(diass));