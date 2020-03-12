var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

// function cumpleanos(persona) {
//   return {
//     ...persona,
//     edad: persona.edad + 1
//   }
// }

function cumpleanos(persona) {// al pasarle un ocjeto como parametro a una función, se lo estamos pasando por referencia por lo que si lo cambiamos se cambia tambien el objeto en su versión global.
  // persona.edad += 1; //aumenta la edad, porque Js se comporta disto con los objetos.
  return { //aquí crearemos un nuevo objeto como resultado tomando todo lo que traía el objeto del parametro
    ...persona, //con esta linea desglosamos el objeto
    edad: persona.edad + 1 //podemos cambiarle sus atributos
    //incluso podríamos agregar más atributos si quisieramos
  }
}
// para poder llavar al objeto anteriormente creado tendremos que guardarlo en una variable puesto que es una copia del objeto que le pasamos como parametro pero con atributos diferentes o incluso iguales.

var personaMasVieja = cumpleanos(persona);