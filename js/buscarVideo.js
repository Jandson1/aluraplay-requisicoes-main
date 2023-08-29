import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
    constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    // Tratamento de erro
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos para o termo buscado.</h2>`;
    }
}

// Seleciona o botão
const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
// Vê quando o usuário clica no botão e envia o evento para a função buscarVideo
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento)); 