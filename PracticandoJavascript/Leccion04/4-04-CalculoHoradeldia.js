/*
6am -11 am - Buenos días
12pm-18pm - Buenas tardes
19pm-24pm-Buenas noches
0am-6am-Durmiendo
 */
let horadelDia = 12;

if (horadelDia >= 6 && horadelDia <= 11) {
    console.log("Buenos dias");
} else if (horadelDia >= 12 && horadelDia <= 18) {
    console.log("Buenas tardes");
} else if (horadelDia >= 19 && horadelDia <= 24) {
    console.log("Buenas noches");
} else if (horadelDia >= 0 && horadelDia <= 6) {
    console.log("Durmiendo");
} else {
    console.log("Valor incorrecto");
}
