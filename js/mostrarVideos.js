import { conectaApi } from "./conectaApi.js"; //Importando a variável exportada do conectaApi

const lista = document.querySelector('[data-lista]');

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    // template strings
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;

    return video;
}

// Função para consumir as funções do conectaApi
async function listaVideos() {
    //Tratamento de erro
    try {
    const listaApi = await conectaApi.listaVideos();
    
    //Criando um card para cada elemento da lista da API
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos.</h2>`
    }
}

listaVideos();