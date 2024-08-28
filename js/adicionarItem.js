import { criarItemDaLista } from "./criarItemDaLista.js"

const item = document.querySelector('.inputItem')
const listaDeCompras = document.getElementById('lista-de-compras')



export function adicionarItem(evento){
    evento.preventDefault() //preventDefault() - Impede que a página sejá recarregada quando clicar no botão

    const itemDaLista = criarItemDaLista(item.value)
    listaDeCompras.appendChild(itemDaLista)
} 
