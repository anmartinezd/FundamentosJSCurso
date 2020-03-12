//las funciones son pedazos de código reutilizables bastante útiles en la programaciòn, javascript nos permite crear nuetras propias funciones.
var nombre = 'Anderson', edad = 19;

//las inicializamos con el Keyword y el nombre de la función, entre los parentesis podemos declarar los argumentos por medio de variables locales.
function imprimirEdad(n, e){
  console.log(`${n} tiene ${e} años`);
}

imprimirEdad(nombre, edad);
imprimirEdad('Vicky', 28);
imprimirEdad('Eric', 24);
imprimirEdad('Darío', 27);
imprimirEdad(25, 'Carlos'); //debido a lo debilmente tipado de Js puede suceder que esto se de y no haya un error de sintáxis pero si hay un error lógico, por lo que debemos tener cuidado con nuestras variables.
imprimirEdad('Juan');//Js por su dinamismo y su estado de lengiaje interpretado, o que corre en ejecuciòn declara la variable pero lo declara como undifined.