// Objetos - Manipulación
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Object.freeze(producto) - Freeze - No deja modificarlo, no permite añadir ni eliminar
// Object.seal(producto) - Modificar propiedades existentes, no permite añadir ni eliminar

// Reescribir un valor
producto.nombre = "Monitor Curvo"

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

//Elimina la propiedad del objeto
delete producto.disponible

console.table(producto)