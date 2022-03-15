/*Operadores de comparación */
let a = 3, b = 2, c = "3";

let z = a == b; //Estamos preguntado si a es igual B. Se revisa el valor(contenido de la variable) sin importar el tipo.
console.log(z); 
console.log(a == c)

z = a === c; //Comparación de igualdad ESTRICTA. Revisa los valores pero también los tipos.
console.log(z);

//Operador si es distinto

let A = 3, B = 2, C = "3";

let Z = a != C;
console.log(Z);

Z = a !== C; 
console.log(Z);