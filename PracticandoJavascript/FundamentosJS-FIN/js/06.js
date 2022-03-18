// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

//Destructuring a 2 objetos, en este caso ambos tienen propiedades iguales (nombres)
const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente //<-- En este caso, le creamos "Alias" , una variable temporal, para evitar conflicto nombre : nombreCliente. Es útil cuando consumimos API´s.

console.log(nombre)
console.log(nombreCliente)