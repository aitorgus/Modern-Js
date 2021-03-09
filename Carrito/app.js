//Como tenemos que esperar a que se lea primero todo nuestro HTML, para ello llamamos al evento DOMContentLoadedEl evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para  finalizar la carga
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
//En otra práctica aquí usábamos el evento click del ratón


const fetchData = async () => {
    try {
        //usamos el await porque tenemos que esperar a que lo lea
        const res= await fetch('api.json') 
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}