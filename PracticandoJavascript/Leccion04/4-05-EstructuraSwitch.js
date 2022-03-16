/*ESTRUCTURA SWITCH */
let numero = 3;
let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    default: //En caso de que no coincida con ningún caso descrito, toma 
        numeroTexto = 'Caso no encontrado';
        break;
}
console.log(numeroTexto);