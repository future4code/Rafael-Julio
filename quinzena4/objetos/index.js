//Criando variáveis e pegando os input do html
const meuTitulo = document.getElementById("titulo-post");
const meuAutor = document.getElementById("autor-post");
const meuConteudoPost = document.getElementById("conteudo-post");

//Criando array onde ficará todos os Posts
const arrayDePost = []

//Função pra pegar os valores e criar um objeto e colocar dentro do arrayDePost.
function criarNovoPost() {
    
    const novoPost = {
        titulo: meuTitulo.value,
        autor: meuAutor.value,
        conteudo: meuConteudoPost.value
    }

    arrayDePost.push(novoPost)
    
    // arrayDePost.push(meuTitulo.value, meuAutor.value, meuConteudoPost.value);
    meuTitulo.value = "";
    meuAutor.value = "";
    meuConteudoPost.value = "";
}

//Declarando os valores para buscar os arrays.
let i = 0;

//Criando a função de postar o Artigo.
function postarArtigo() {
    const inserindoPost = document.getElementById("container-de-posts")
       
    inserindoPost.innerHTML += "<h1>" + arrayDePost[i].titulo + "</h1>" + "<h2>" + arrayDePost[i].autor + "</h2>" +"<p>" + arrayDePost[i].conteudo + "</p>"
    i++
       
}

function clicarNoBotao() {
    criarNovoPost()
    postarArtigo()
    inserirNovaImagem()
}

function inserirNovaImagem() {
    const valorDoInput = document.getElementById("imagem-post")
    const containerDeImagem = document.getElementById("container-de-posts")

    containerDeImagem.innerHTML += `<img class="img-post" src="${valorDoInput.value}" href="Alguma imagem" />`
    valorDoInput.value = "";
}

       

