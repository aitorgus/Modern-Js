let autos = new Array("BMW", "Mercedes Benz", "Volvo"); //Forma antigua de declarar los Arrays.

const coches = ["BMW", "Mercedes Benz", "Volvo"] //Va a guardar la referencia donde se ubica el valor de la variable
console.log(coches);
console.log(coches[0]);
console.log(coches[1]);
console.log(coches[2]);

for (let i = 0; i < autos.length; i++) { //Con la propiedad .length obtengo la longitud del array, recorro el array y conforme avanza el contador voy mostrando el contenido del mismo desde consola
    console.log(i + " : ", coches[i]);
}