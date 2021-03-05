document.querySelector('h3') //OJO, selecciona el primer elemento que encuentre
console.log(document.querySelector('h3'))

 //Le pongo un .h3-danger (Uso el punto como en CSS para llamar a la clase)
console.log(document.querySelector('.h3-danger'))

 //Le pongo el #parrafo para llamar al IDENTIFICADOR (COMO EN CCSS)
console.log(document.querySelector('#parrafo'))
 
//Una alternativa con los ID es la siguiente (utilizo el getElementbyId)

console.log(document.getElementById('parrafo'))

//Si queremos seleccionar múltiples etiquetas usaremos .querySelectorAll()

console.log(document.querySelectorAll('h3-danger'))

