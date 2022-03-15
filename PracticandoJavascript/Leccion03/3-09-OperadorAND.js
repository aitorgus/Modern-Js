let a = 5;
let valMin = 0;
let valMax = 10;

//Ejemplo (&&), regresa TRUE sólo si ambos operando son TRUE
if (a >= valMin && a <= valMax) {
    console.log("Está dentro del rango :", valMin, "-", valMax);
} else {
    console.log("No está dentro del rango", valMin, "-", valMax);
}