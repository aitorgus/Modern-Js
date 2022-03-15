/*
OPERADORES DE DECREMENTO E INCREMENTO
*/

let a = 3, b = 2;
let z = a + b;

//INCREMENTO
//Pre-Incremento (el operador ++ antes de la variaable) 
/* El preincremento  significa que la variable a, incrementa su valor en 1, antes de ser asignado su valor a la variable z */
z = ++a;
console.log(a);
console.log(z);

//Post-Incremento (el operador ++ después de la varible)
/*En este caso, se asigna el valor de la variable b a la variable Z y luego el valor de la variable b, incrementa en 1 */
z = b++;
console.log(b);
console.log(z);


//DECREMENTO
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento

z = b--;
console.log(b);
console.log(z);
