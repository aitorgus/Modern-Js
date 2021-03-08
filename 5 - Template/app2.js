const lista = document.getElementById("lista");
const arrayItem = ["item 1", "item 2", "item 3"];

const template = document.querySelector('#template-li').content 
const fragment = document.createDocumentFragment()

arrayItem.forEach ( item => {

    //Seleccionamos al li con la clase .list y al span. Podríamos ir directamente al span, pero una buena práctica es la de indicar de forma descendente donde se encuentra la clase a la que queremos acceder puede ocurrir de que existan varias etiquetas span por ejemplo en distintas partes del código.
    template.querySelector('.list span ').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)

})

lista.appendChild(fragment)
