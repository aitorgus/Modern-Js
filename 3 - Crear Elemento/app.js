const lista = document.getElementById('lista')
//console.log(lista)


const arrayElement = ['1º Elemento', '2º Elemento', '3º Elemento']
//arrayElement.forEach(item => {
//con CreateElement vamos a crear contenido en nuestro documento HTML
//Incorpora a la etiqueda con el ID "lista" el contenido guardado en li
    //const li = document.createElement('li')
    //li.textContent='item'
    //lista.appendChild(li) //Agregamos un elemento hijo 
//}) //Recorremos el ARRAY

arrayElement.forEach(item => {
    lista.innerHTML  +=`<li>${item}</li> ` //Concatenamos
}); //Inserta etiquetas html, en la cual va un item que va cambiando conforme avanza el bucle foreach con el contenido
//del array que hemos declardo más arriba 