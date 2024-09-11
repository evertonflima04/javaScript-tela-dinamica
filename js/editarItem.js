import { horaEData } from "./horaEData.js"

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item: ")

    // Fazer uma verificação se o prompt está vázio
    if (novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector('#item-titulo')
        itemTextoAtualizado.textContent = novoItem  //textContent funciona igual o innerText 

        const estavaComprado = elemento.querySelector(".checkbox-input").checked

        if (estavaComprado){
            elemento.querySelector(".checkbox-input").checked = true
            elemento.querySelector(".checkbox-customizado").classList.add("checked")
            itemTextoAtualizado.style.textDecoration = "line-through"
        }

        //Atualizar hora e data 
        const atualizandoData = document.querySelector(".texto-data")
        atualizandoData.textContent = horaEData()
    }
}