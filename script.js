const item = document.querySelector('.inputItem')
const botaoSalvarItem = document.querySelector('.adicionarItem')
const listaDeCompras = document.getElementById('lista-de-compras')
const listaComprados = document.getElementById('lista-comprados')

let contador = 0

botaoSalvarItem.addEventListener('click', adicionarItem)

function adicionarItem(evento){
    evento.preventDefault() //preventDefault() - Impede que a página sejá recarregada quando clicar no botão

    /* Montando a estrutura da lista de itens */

    const itemDaLista = document.createElement("li")  //Criando uma lista 
    const containerItemLista = document.createElement("div")  //criando uma div
    containerItemLista.classList.add("item-lista-container")  // colocando a class na nossa div
    
    const containerNomeDoItem = document.createElement("div")
    containerNomeDoItem.classList.add("container-nome-item")

    const containerCheckbox = document.createElement("div")
    containerCheckbox.classList.add("checkbox-container")

    const checkInput = document.createElement("input")
    checkInput.type = "checkbox"
    checkInput.classList.add("checkbox-input")
    checkInput.id = "checkbox-" + contador++

    const checkLabel = document.createElement("label")
    checkLabel.setAttribute("for", checkInput.id)

    checkLabel.addEventListener("click", function(evento) {
        const checkInput = evento.currentTarget.querySelector('.checkbox-input')
        const checkCustumizado = evento.currentTarget.querySelector('.checkbox-customizado')
        const itemTitulo = evento.currentTarget.closest("li").querySelector('#item-titulo')

        if (checkInput.checked){
            checkCustumizado.classList.add("checked")
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(itemDaLista)
        } else {
            checkCustumizado.classList.remove("checked")
            itemTitulo.style.textDecoration = "none"
            listaDeCompras.appendChild(itemDaLista)
        }
    })

    const checkCustumizado = document.createElement("div")
    checkCustumizado.classList.add("checkbox-customizado")

    checkLabel.appendChild(checkInput)
    checkLabel.appendChild(checkCustumizado)

    containerCheckbox.appendChild(checkLabel)
    containerNomeDoItem.appendChild(containerCheckbox)


    const nomeDoItem = document.createElement("p")
    nomeDoItem.id = "item-titulo"
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

    const itemData = document.createElement("p")

    /*Formatando o tipo da data para brasileiro || (weekday: long) vai mostrar o nome compreto (segunda-feira)
    || new Date().toLocaleDateString() (Mostra a data atual)
    || new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric") (Devolve o horário atual - somente a hora e os minutos)
    */

    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${ new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("texto-data")

    itemDaLista.appendChild(containerItemLista)  // adicionado a div dentro de lista(li)
    itemDaLista.appendChild(itemData)
    listaDeCompras.appendChild(itemDaLista)
} 