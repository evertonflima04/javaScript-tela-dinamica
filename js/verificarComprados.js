const tituloComprados = document.querySelector("#mensagem-lista-comprados")
const separadorComprados = document.querySelector("#separador-comprados")

export function verficarListaComprados(lista){
    if(lista.childElementCount === 0) {
        tituloComprados.style.display = "none"
        separadorComprados.style.display = "none"
    }else{
        tituloComprados.style.display = "block"
        separadorComprados.style.display = "block"
    }
}