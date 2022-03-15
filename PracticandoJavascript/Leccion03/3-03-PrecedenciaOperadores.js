/* Precedencia de Javascript */

let a = 3, b = 2, c = 1, d=4;

let z = a * b +c /d ; //Las expresiones se evaluan de izq a derecha
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z); 