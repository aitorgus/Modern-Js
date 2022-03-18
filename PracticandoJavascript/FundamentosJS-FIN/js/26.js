// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    //Validar el formulario, para obligar a que se rellene los campos
    if (nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, enviando...')
    }
})