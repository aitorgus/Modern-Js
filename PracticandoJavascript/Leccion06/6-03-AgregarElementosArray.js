const coches = ["BMW", "Mercedes Benz", "Volvo"];
coches.push("Audi");
console.log(coches.length);

coches[coches.length] = "Cadillac"; //Estoy añadiendo un elemento a la última posición del array, en este caso la posición 4.
console.log(coches);

coches[6] = "Porshe";
console.log(coches);

console.log(typeof coches); //No nos define si es un array

//Preguntamos si es un array
console.log(Array.isArray(coches));
console.log(coches instanceof Array); //le preguntamos si es un array

