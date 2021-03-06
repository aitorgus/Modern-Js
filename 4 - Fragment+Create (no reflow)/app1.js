const lista = document.getElementById('lista')

const arrayItem = ['Item 1', ' Item 2', ' Item 3']

const fragmento = document.createDocumentFragment()
//Alternativa const fragmento= new DocumentFragment()

arrayItem.forEach(item => {
    //No puedo utilizar el innerHTML aquí
    const li =document.createElement('li')
    li.textContent =item
    const childNode =fragmento.firstChild //Me da el elemento anterior y lo guardo en childNode
    console.log(item,childNode)
    fragmento.insertBefore(li,childNode) 
    //Usamos node.firstchild e insertBefore que se le pasa 2 parámetros
    
})

//Lo empujo a la lista. Evito el reflow
lista.appendChild(fragmento)