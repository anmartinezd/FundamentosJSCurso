var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}
//un objeto se compone de una clave y valor, es parecido a los diccionarios en python solo que también pueden llevar funciones enre sus valores
var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'Pepito' }) //deifiniendo un objeto en los argumentos
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })
