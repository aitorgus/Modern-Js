// Unir 2 objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: 'Juan',
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente) // No

//En React existe el principio de inmutabilidad, creamos otro objeto donde guardar los contenidos de otros objetos (en este caso los unimos)
const nuevoObjeto2 = {
    producto: { ...producto }, //Toma una copia del objeto producto. Al ser objeto tenemos que asignarlos utilizando corchetes.
    cliente: { ...cliente }
}

console.log(nuevoObjeto2)
console.log(nuevoObjeto2.producto.precio)
console.log(cliente)
console.log(producto)