// se crea constante T° en grados Kelvin
const kelvin = 273.15;
// Se crea variable T° en grados celsius 
var celsiusk;
// Se transforma T° en grados celisus a grados kelvin y el resultado se guarda en una nueva
celsiusk = prompt("Ingresa T° en grados celsius para convertir en T° Kelvin: ");
// Se muestra el resultado 
alert((parseFloat(celsiusk) + kelvin))

document.write(" La T° en grados Kelvin es: ");
document.write((parseFloat(celsiusk) + kelvin));

// se crean constantes T° en grados Farenheit
const Farenheit1 = 9 / 5;
const Farenheit2 = 32;

// Se crea variable T° en grados celsius
var celsiusf;
// Se transforma T° en grados celisus a grados Farenheit y el resultado se guarda en una nueva
celsiusf = prompt("Ingresa T° en grados celsius para convertir en T° Farenheit: ");
// Se muestra el resultado 
alert((parseFloat(celsiusf) * Farenheit1) + Farenheit2)

document.write(" La T° en grados Farenheit es: ");
document.write((parseFloat(celsiusf) * Farenheit1) + Farenheit2);