//Concatenación de cadenas

var nombre = 'Juan';
var apellido = 'Pérez';

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

var nombrecompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombrecompleto2);

//Concatenar números a una cadena (las expresiones en Js se interpretan de izq a derecha, en este caso interpreta primero la cadena y concatena letras con los números)
var x = nombre + 219;
console.log(x);



x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);