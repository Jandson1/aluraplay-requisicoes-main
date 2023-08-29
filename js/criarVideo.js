import { conectaApi } from "./conectaApi.js";

// Criando a variável formulário.
const formulario = document.querySelector('[data-formulario]');

async function criaVideo(evento) {
    // Previne que a ação padrão do formulário aconteça(Recarregar).
    evento.preventDefault();
   
    // Definindo variáveis e atribuindo seletor de elemento com data-attributes.
    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    // Utilizado para declarar um número de visualizações aleatório.
    const descricao = Math.floor(Math.random() * 10).toString();

    // Tratamento de erro
    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
    
        // Quando o envio é concluído o usuário é redirecionado a pasta de envio concluido.
        window.location.href = '../pages/envio-concluido.html';
    } catch (e) {
        // Criando alerta de erro
        alert(e);
    }
}

// Vê o momento que o formulário é enviado e manda o evento para a função criar o vídeo.
formulario.addEventListener('submit', evento => criaVideo(evento));