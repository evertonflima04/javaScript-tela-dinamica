 import { adicionarItem } from "./js/adicionarItem.js"  // Importando função de outro arquivo

const botaoSalvarItem = document.querySelector('.adicionarItem')
botaoSalvarItem.addEventListener('click', adicionarItem)
