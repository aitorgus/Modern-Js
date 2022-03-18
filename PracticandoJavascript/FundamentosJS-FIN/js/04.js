// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement
/*Aquí puedo añadir elementos a un objeto, si el elemento creado dentro del objeto, se llama igual que las constante, funciona, si no, habría que hacer asignaciones 

const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado2: autenticado,
    usuario2: usuario
}

*/

const autenticado2 = true
const usuario2 = "Juan"

const nuevoObjeto = {
    autenticado2,
    usuario2
}

console.table(nuevoObjeto)