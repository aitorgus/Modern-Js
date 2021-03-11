const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton-buscar')
const resultado = document.querySelector('#resultado')

const productos = [

    { nombre: 'Platano', Valor: 100 },
    { nombre: 'Peras', Valor: 200 } ,
    { nombre: 'Manzanas', Valor: 300 },
    { nombre: 'Fresas', Valor: 400 },
    { nombre: 'Cocos', Valor: 500 }
]

const filtrar = () => {
    resultado.innerHTML = '';
    //Con value accedemos a lo que el usuario escribe
    const texto = formulario.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase(); //Accedemos al atributo del objeto "Productos"

            if(nombre.indexOf(texto) !== -1){ 
                //El += Lo uso para concatenar
                resultado.innerHTML +=` 
                <li>${producto.nombre } - Valor : ${producto.Valor } </li>`
            }
    }

    if(resultado.innerHTML ==='') {
        resultado.innerHTML += `
        <li>Producto no encontrado </li>`
    }
}

boton.addEventListener('click', filtrar) //Añadimos un evento al pulsar el botón con el id "boton-buscar", el cual ejecute la función filtrar
{   formulario.addEventListener('keyup', filtrar)
        //Cada vez que pulsemos una letra se va a aplicar el filtrar (en tiempo real)
}