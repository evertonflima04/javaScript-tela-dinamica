const item = document.querySelector('.inputItem')
const botaoSalvarItem = document.querySelector('.adicionarItem')
const listaDeCompras = document.getElementById('lista-de-compras')

botaoSalvarItem.addEventListener('click', adicionarItem)

function adicionarItem(evento){
    evento.preventDefault() //preventDefault() - Impede que a página sejá recarregada quando clicar no botão

    /* Montando a estrutura da lista de itens */

    const itemDaLista = document.createElement("li")  //Criando uma lista 
    const containerItemLista = document.createElement("div")  //criando uma div
    containerItemLista.classList.add("item-lista-container")  // colocando a class na nossa div
    
    const containerNomeDoItem = document.createElement("div")
    const nomeDoItem = document.createElement("p")
    nomeDoItem.innerText = item.value  //Assim vou alterar o "p" para o valor que for digitado pelo o usuário
    containerNomeDoItem.appendChild(nomeDoItem)  //Adicionado o "p" para dentro da div

    const containerBotao = document.createElement("div")
    const botaoRemover = document.createElement("button")
    const botaoEditar = document.createElement("button")

    botaoEditar.classList.add("botao-acao")
    botaoRemover.classList.add("botao-acao")

    const imgRemover = document.createElement("img")
    imgRemover.src = "img/delete.svg"  //adicionando imagem elemento img
    imgRemover.alt = "Remover"

    const imgEditar = document.createElement("img")
    imgEditar.src = "img/edit.svg"
    imgEditar.alt = "Editar"

    botaoRemover.appendChild(imgRemover)
    botaoEditar.appendChild(imgEditar)
    containerBotao.appendChild(botaoRemover)
    containerBotao.appendChild(botaoEditar)


    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotao)
    itemDaLista.appendChild(containerItemLista)  // adicionado a div dentro de lista(li)
    listaDeCompras.appendChild(itemDaLista)
} 