function sumar(numero1, numero2) {
    return numero1 + numero2
}

function restar(numero1, numero2) {
    return numero1 - numero2
}

//No se puede exportar mas de una función, a menos que la expresemos como un objeto, donde acumularíamos múltiples funciones
export {
    sumar,
    restar
}
