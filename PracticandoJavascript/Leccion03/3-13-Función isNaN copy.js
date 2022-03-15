/*Convertir String a tipo número */

let miNumero = "18x";


let edad = Number(miNumero);
console.log(edad); //Nos devuelve NaN (not a number) por culpa de haber añadido un caracter

//preguntar si la variable NO es numérica

if (isNaN(edad)) {
    console.log("No es un número");
} else {

    if (edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("Muy joven para votar");
    }

}

