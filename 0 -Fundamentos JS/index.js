//Var vs let vs const

var edad = 10
var edad =20 
console.log(edad) //Saldría 20, coge el último valor

let edad = 10 //Let no permite declarar la misma variable mas de 1 vez
console.log(edad) //Saldría 20, coge el último valor

//Lo mismo ocurre con el const

let edad =10

if(true)
{
    let edad=20 // OJO, dentro del if se cambia, pero no fuera, gracias al LET
    console.log(edad)
}

console.log(edad)