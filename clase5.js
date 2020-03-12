var nombre = 'Anderson' //variable global ya que no está definida dentro del cuerpo de una función, entonces puede ser llamada desde cualquier parte del código

function imprimirNombreEnMayusculas(nombre) { //al declarar la variable en el argumento la definimos como local, lo cual quiere decir que sólo existe dentro del cuerpo de la función y que sólo podrá modificarse y llamarse dentro de la función.
  nombre = nombre.toUpperCase()
  //en este caso a pesar de que la variable global también se llame nombre Js nos permite declararla de manera local de esta manera hay una variable nombre que sólo se modificará de manera local dejando intacta la variable golbal.
  console.log(nombre)
  //para referirnos a la variable global con el mismo nombre tendríamos que llamarla por medio del entorno, como por ejemplo window.nombre haría referencia a la variable global nombre
}

 //debido al Scope si intentásemos llamar a la variable local nombre aquí, o esta llamandose de otro modo, no podrìamos ya que sólo está definida para el contexto de la función y muere cuando la función deja de ejecutarse.
imprimirNombreEnMayusculas(nombre)

//Toda variable que no esté definida dentro de una función va a estar definida dentro del alcance global y vamos a poder acceder a ella por medio del objeto global como ya lo habíamos visto.