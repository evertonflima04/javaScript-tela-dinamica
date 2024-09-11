import { criarItemDaLista } from "./criarItemDaLista.js"
import { verificarListaVazia } from "./verificarListaVazia.js"

const item = document.querySelector('.inputItem')
const listaDeCompras = document.getElementById('lista-de-compras')



export function adicionarItem(evento){
    evento.preventDefault() //preventDefault() - Impede que a página sejá recarregada quando clicar no botão

    if (item.value === ""){
        alert("Por favor, insira um item!")
        return
    }

    const itemDaLista = criarItemDaLista(item.value)
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras)
    item.value = ""

} 
