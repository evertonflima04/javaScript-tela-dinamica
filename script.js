const item = document.querySelector('.input-item')
const botaoSalvarItem = document.querySelector('.adicionarItem')

botaoSalvarItem.addEventListener('click', adicionarItem)

function adicionarItem(evento){
    evento.preventDefault() //preventDefault() - Impede que a página sejá recarregada quando clicar no botão
    
}