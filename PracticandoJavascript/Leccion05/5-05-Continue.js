for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue; //Se va a ejecutar la siguiente iteracción del ciclo for
    } else {
        console.log(contador);
    }
}