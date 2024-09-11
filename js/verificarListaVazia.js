const mensagemListaVazia = document.querySelector("#mensagem-lista-vazia")

export function verificarListaVazia(lista) {
    if(lista.querySelectorAll('li').length === 0){  // Essa condicional faz a conta de quantos elementos filhos essa lista tem, verificando se é igual a zero.
        mensagemListaVazia.style.display = 'block'; // Caso estiver vazia a mensagem aparece(display = block)
    }else {
        mensagemListaVazia.style.display = 'none'; //Caso tenho algo a mensagem some(display = none)
    }

  }