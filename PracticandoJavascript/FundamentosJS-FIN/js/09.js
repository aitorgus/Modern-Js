// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al principio del array


//PRINCIPIO DE INMUTABILIDAD, no añado nuevos elementos al Array existente, si no que creo uno nuevo , copiando el array anterior y añadiendo cambios

// const nuevoArreglo = [...tecnologias, 'GraphQL']
// const nuevoArreglo = ['GraphQL', ...tecnologias]

// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 3) // Elimina de una posición en especifica

// const nuevoArray = tecnologias.filter( function(tech) {
//     return tech === 'React'
// })

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(function (tech) {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)