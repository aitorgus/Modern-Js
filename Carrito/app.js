const items = document.getElementById('items') //Seleccionamos el sitio donde vamos a colocar las tarjetas
const templateCard = document.getElementById('template-card').content //accedemos al template , luego lo clonaremos
const fragment = document.createDocumentFragment()
//Como tenemos que esperar a que se lea primero todo nuestro HTML, para ello llamamos al evento DOMContentLoadedEl evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para  finalizar la carga
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
//En otra práctica aquí usábamos el evento click del ratón

// Traer productos deL JSON

const fetchData = async () => {
    try {
        //usamos el await porque tenemos que esperar a que lo lea
        const res= await fetch('api.json') 
        const data = await res.json()
        pintarCards(data)
        
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach( producto => { 
        //Recordemos que data es lo que me devuelve el JSON, con forEach, estoy recorriendo el contenido cargado desde JSON a la variable data
        templateCard.getElementById('titulo-h5').textContent = producto.title
        //Queremos seleccionar el título, una buena práctica sería darle un ID  Estamos parseando el título del template con el título del json
        templateCard.getElementById('parrafo-precio').textContent = producto.precio

        templateCard.querySelector('.img-card-top').setAttribute('src',producto.thumbnailUrl)
        //Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
       
        const clone =templateCard.cloneNode(true)
        fragment.appendChild(clone) //El fragment se guarda en memoria volátil y se borra al pintarse


    })
    items.appendChild(fragment)
}