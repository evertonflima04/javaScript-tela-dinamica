import { verficarListaComprados } from "./verificarComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.querySelector("#lista-de-compras")
const listaComprados = document.querySelector("#lista-comprados")

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item")

    if(confirmacao){
        elemento.remove()

        verificarListaVazia(listaDeCompras)
        verficarListaComprados(listaComprados)
    }
}

export {excluirItem}