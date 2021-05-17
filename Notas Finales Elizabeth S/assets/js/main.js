//Aquí definimos las variables
var nombre = prompt( "Ingresa un nombre: " );
var carrera = prompt( "Ingresa una Carrera: " );
var ramo1 = prompt( "Ingresa Primer Ramo: " );
var nota1r1 = prompt( "Ingrese Nota 1 ["+ramo1+"]: " );
var nota2r1 = prompt( "Ingrese Nota 2 ["+ramo1+"]: " );
var nota3r1 = prompt( "Ingrese Nota 3 ["+ramo1+"]: " );
var Promedio1 = (parseInt(nota1r1) + parseInt(nota2r1) + parseInt(nota3r1))/3;
var ramo2 = prompt( "Ingresa Segundo Ramo: " );
var nota1r2 = prompt( "Ingrese Nota 1 ["+ramo2+"]: " );
var nota2r2 = prompt( "Ingrese Nota 2 ["+ramo2+"]: " );
var nota3r2 = prompt( "Ingrese Nota 3 ["+ramo2+"]: " );
var Promedio2 = (parseInt(nota1r2) + parseInt(nota2r2) + parseInt(nota3r2))/3;
var ramo3 = prompt( "Ingresa Tercer Ramo: " );
var nota1r3 = prompt( "Ingrese Nota 1 ["+ramo3+"]: " );
var nota2r3 = prompt( "Ingrese Nota 2 ["+ramo3+"]: " );
var nota3r3 = prompt( "Ingrese Nota 3 ["+ramo3+"]: " );
var Promedio3 = (parseInt(nota1r3) + parseInt(nota2r3))/2;

//Aquí creamos nuestro contenedor con bootstrap
document .write( "<div class='container'>" );

document .write( "<h1>Notas Finales</h1>" )
document .write( "<p>Nombre:&nbsp&nbsp&nbsp&nbsp&nbsp"+nombre+"</p>" )
document .write( "<p>Carrera:&nbsp&nbsp&nbsp&nbsp&nbsp"+carrera+"</p>" ) 

// Aquí creamos una tabla con bootstrap
document .write( "<table class='table'>" );

//Aquí definimos un tipo de encabezado con bootstrap
document .write( "<thead class='bg-dark text-white'>" );

//Aquí definimos las columnas de nuestra tabla
document .write( "<tr>" );

//Aquí definimos tipos de datos y encabezado de cada columna
document .write( "<th scope='col'>Ramo</th>" );
document .write( "<th scope='col'>Nota 1</th>" );
document .write( "<th scope='col'>Nota 2</th>" );
document .write( "<th scope='col'>Nota 3</th>" );
document .write( "<th scope='col'>Promedio</th>" );

document .write( "</tr>" );
//Aquí cerramos con tr las columnas definidas en nuestra tabla

document .write( "</thead>" );
//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document .write( "<tbody>" );
document .write( "<tr>" );
document .write( "<th scope='row'>"+ramo1+"</th>" );
document .write( "<th scope='row'>"+nota1r1+"</th>" );
document .write( "<th scope='row'>"+nota2r1+"</th>" );
document .write( "<th scope='row'>"+nota3r1+"</th>" ); 
document .write( "<th scope='row'>"+Promedio1.toFixed(2)+"</th>" );
document .write( "</tr>" );
document .write( "<tr>" );
document .write( "<th scope='row'>"+ramo2+"</th>" );
document .write( "<th scope='row'>"+nota1r2+"</th>" );
document .write( "<th scope='row'>"+nota2r2+"</th>" );
document .write( "<th scope='row'>"+nota3r2+"</th>" ); 
document .write( "<th scope='row'>"+Promedio2.toFixed(2)+"</th>" );
document .write( "</tr>" );
document .write( "<tr>" );
document .write( "<th scope='row'>"+ramo3+"</th>" );
document .write( "<th scope='row'>"+nota1r3+"</th>" );
document .write( "<th scope='row'>"+nota2r3+"</th>" );
document .write( "<th scope='row'>"+nota3r3+"</th>" ); 
document .write( "<th scope='row'>"+Promedio3.toFixed(2)+"</th>" );
document .write( "</tr>" );
document .write( "</tbody>" );
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna

//Aquí agregamos un párrafo a nuestra tabla
document .write("<p>Para aprobar el ramo JavaScript con nota 4, necesitas obtener un "+Promedio3.toFixed(2)+" en la nota 3</p>")

document .write( "</table" );
//Aquí cerramos nuestra tabla