// Função que retorna os videos a partir dos dados consumidos pela API.
async function listaVideos() {
    // Requisição GET para retornar dados.
    const conexao = await fetch('http://localhost:3000/videos');
    //Transformando os dados da variável para formato json. 
    const conexaoCovertida = await conexao.json();
    // retorna o valor da variável.
    return conexaoCovertida; 
}

// Função para criar video com os dados fornecidos pelo usuário.
async function criaVideo(titulo, descricao, url, imagem) {
    // Requisição POST para enviar dados para a API.
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            //Especificar o tipo de arquivo que está sendo enviado.
            'content-type': 'application/json' 
        },
        // Transforma em String tudo que está sendo enviado.
        body: JSON.stringify({
            // Dados que serão cadatrados na requisição para a API.
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    }); 

    // Mensagem de erro, caso a conexão não dê certo.
    if(!conexao.ok) {
        throw new Error('Não foi possível enviar o vídeo.');
    } 
    
    // Convertendo e retornando o resultado da conexão com o usuário.
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Função  para retornar videos pela ferramenta de busca.
async function buscaVideo(termoDeBusca) {
    // Requisição no termo de busca utilizando template string 
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


// Exportando os resultados para serem utilizados em outros arquivos.
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
