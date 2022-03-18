// Fetch API  - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    const respuesta = await fetch(url) //Queda en espera hasta que fetch consulta a la API.
    const resultado = await respuesta.json()
}
consultarAPI();