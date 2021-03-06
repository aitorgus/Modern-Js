//Podemos seleccionar elementos por su ID y cambiar clases y ID de referencia

const parrafo = document.querySelector('#parrafo')
parrafo.textContent = 'texto desde JS'
parrafo.innerHTML = ' <b>Texto con innerHTML <b>' //Podemos añadir etiquetas HTML

parrafo.classList.add('h3-danger', 'my-2') //A la etiqueta que contiene el ID párrafo, le añadimos la clase h3-danger
