var x = 4, y = '4'

var anderson = {
  nombre: 'Anderson'
}

var otraPersona = {
  nombre: 'Anderson'
}

x == y //True 
x === y //False (Recomendado)
x != y //

anderson == otraPersona // false porque pregunta por la referencia a la variable que se utiliza.
anderson === otraPersona //false

// si por otro lado
var otraPersonaDiferente = anderson //estamos haciendo referencia al mismo espacio en memoria
// si cambiamos la variable otraPersonaDiferente cambiaremos igualmente a la variable anderson, puesto que son dos referencias al mismo espacio en memoria por lo que si le cambiamos un atributo por ejemplo el nombre este será el mismo para los 2.
//entonces
anderson == otraPersonaDiferente //True
anderson === otraPersonaDiferente //True

var desgloceAnderson = { //creamos un objeto literal desglosando el objeto anderson
  ...anderson
}

desgloceAnderson == anderson //False puesto que son 2 objetos diferentes a pesar de tener la misma informaciòn

