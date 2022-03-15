/*Convertir String a tipo número */

let miNumero = "10";
console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);


if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("Muy joven para votar");
}

let puedevotar = (edad >= 18) ? "Puede votar" : "No puede votar"; 
console.log(puedevotar);