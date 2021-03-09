const cards = document.getElementById('cards') //Seleccionamos el sitio donde vamos a colocar las tarjetas
const items =document.getElementById('items')
const footer =document.getElementById('footer')
const templateCard = document.getElementById('template-card').content //accedemos al template , luego lo clonaremos
const templateFooter = document.getElementById('template-footer').content
const templateCarrito =document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = { } //Creamos un objeto vacío





//Como tenemos que esperar a que se lea primero todo nuestro HTML, para ello llamamos al evento DOMContentLoadedEl evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para  finalizar la carga
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
//En otra práctica aquí usábamos el evento click del ratón
cards.addEventListener('click', (eventoClick) => {
    addCarrito(eventoClick)


})
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

        templateCard.querySelector('img').setAttribute('src',producto.thumbnailUrl)
        //Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.

        //Cada boton de comprar debe de tener asignado el ID del producto (viene en el JSON)
        templateCard.querySelector('.btn-dark').dataset.id=producto.id
       
        const clone =templateCard.cloneNode(true)
        fragment.appendChild(clone) //El fragment se guarda en memoria volátil y se borra al pintarse


    })
    cards.appendChild(fragment)
}

const addCarrito = eventoClick => {
    
    if(eventoClick.target.classList.contains('btn-dark')){ 

        setCarrito(eventoClick.target.parentElement)
    }
    //Consultamos si el elemento que estamos clickando contiene la clase .btn-dark

    eventoClick.stopPropagation()
}

const setCarrito = objeto => {
    //Los elementos que "compro" me los pushea en esta función
    const producto = {
        id:objeto.querySelector('.btn-dark').dataset.id, //OJO con poner la coma
        title:objeto.querySelector('h5').textContent,
        precio:objeto.querySelector('p').textContent,
        cantidad: 1
    }

    //Para acceder a los objetos, tenemos que preguntar si existe
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad+1
                            //Accedemos a carrido, seleccionamos por id de producto y le sumamos 1 a la cantidad de producto
    }

    carrito [producto.id] = {...producto} //Hacemos una copia de producto
    pintarCarrito()
}

const pintarCarrito = () => {
    //console.log(carrito)
    items.innerHTML= ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        //Existen varios td, por lo que indicamos que queremos acceder al primero (el 0)
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id //Botón agregar
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id //Botón de borrar
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = '' //Lo dejamos vacio para que no se sobreescriba
    if(Object.keys(carrito).length ===0){
        //Si el carrito está vacio entonces escribimos lo siguiente con el método innerHTML
        footer.innerHTML = ` <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    }
    //En caso de que no esté vacio el carrito, tenemos que pintar los productos


    //nCantidad es la cantidad total de producto (de todos los tipos)
    // sumar cantidad y sumar Precios totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)
}