// var nombre = 'Sacha', apellido = 'Lifszyc'

// var nombreEnMayusculas = nombre.toUpperCase()
// var apellidoEnMinusculas = apellido.toLowerCase()

// var primeraLetraDelNombre = nombre.charAt(0)
// var cantidadDeLetrasDelNombre = nombre.length

// var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// var str = nombre.substr(1, 2)

var nombre = 'Anderson', apellido = 'Martínez';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length; //lenght es un atributo

var nombreCompleto = nombre + ' ' + apellido;

//interpolación de texto

var nombreCompleto = `${nombre} ${apellido.toUpperCase}` // dentro de las llaves se puede incluir código Javascript permitiendo por ejemplo utilizar un variable.toUpperCase() con total normalidad

var str = nombre.substr(1, 2);

//desafio

nombre = 'Juan';

var ultimaLetra = `${nombre.charAt(nombre.length - 1)}`;