//Tipos de datos String
/*las cadenas y tipo String, lo ubicamos entre comillas*/
var nombre = "Aitor";
nombre = "Aitor";
//Para concer el tipo de la variable, utilizamos el operador typeof
console.log(typeof (nombre));
nombre = 10;
console.log(typeof (nombre));

//Tipo de datos numérico
var numero = 1000;
console.log(numero);

//Tipo objeto
var objeto = {
    nombre: "Aitor",
    apellidos: "Camacho",
    telefono: 678811690
}

console.log(objeto);
console.log(objeto.nombre);
console.log(typeof (objeto));
console.log(typeof (objeto.telefono));

// Tipo de dato Booleano (true, false) [A las variables Booleanas, se les conoce como banderas]
var bandera = true;
console.log(bandera);
console.log(typeof (bandera));

// Tipo de dato Function

function miFuncion() { }
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de datos Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una function
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre; //This se utiliza para apuntar a los atributos de la clase 
        this.apellido = apellido;
    }

}
console.log(Persona);
console.log(typeof Persona)


//Tipo undefined
var x; //undefined es un tipo de dato y tb un valor de una variable.
console.log(x);
console.log(typeof x);
x = undefined;


//Null -> Ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos
var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);
console.log(typeof autos)

//Asignar cadenas vacías.
var z = ''; //Asignamos una cadena vacía.
console.log(z);
console.log(typeof z);