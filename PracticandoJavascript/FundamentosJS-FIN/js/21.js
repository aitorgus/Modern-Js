// Scope

const precio=300 //Existe de forma global

function unaFuncion() {
    const precio = 600 //Existe de forma local
    console.log(precio)
}

if(true) {
    console.log(precio)
}


unaFuncion()