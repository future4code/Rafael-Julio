// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// -------- Exercício 1 ---------- //

//Esse código pede ao usuário um número e logo em seguida ele faz uma verificação.
//se aquele número é divisível por 2, se o resto da divisão é igual a 0, ou seja, 
//se esse número é par, e qdo o usuário digita um número par, ele imprime:
//passou no teste, e se o resto for 1, o número é impar, ele vai imprimir não passou no teste.

// -------- Exercício 2 ---------- //

//a. Para que serve o código acima?

//R: O código acima pede uma fruta ao usuário e serve pra imprimir no console uma fruta escolhida pelo 
//usuário, e junto o seu preço, e se não reconhecer a fruta ele imprime o que foi escrito e 
//seu preço será 5.

//b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

//R: O valor será 2.25.

//c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
//impressa no console se retirássemos o break que está logo acima do default 
//(o break indicado pelo comentário "BREAK PARA O ITEM c.")?

//R: Acontece de imprimir o preco igual a 5, pois a variável preco recebe outro valor.

// -------- Exercício 3 ---------- //

//a. O que a primeira linha está fazendo?

//R: A primeira linha do código está criando uma variável do tipo const e nome numero e pedindo
// ao usuário pra digitar um número que será armazenada em numero.

//b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
//E se fosse o número -10?

//R: mensagem será que esse número passou no teste do primeiro console.log, e o segundo console.log
//dará um erro dizendo que a variável mensagem não foi definida.
// Se o número fosse -10 só aparecia o erro dizendo que a variável mensagem não foi definida.

//c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R: Haverá erro, pois a variável mensagem foi definida dentro de um escopo filho, e tem um 
//console.log no escopo pai.


// -------- Exercício 4 ---------- //

// let idade = Number(prompt("Qual a sua idade?"))
// if (idade >= 18) {
//     console.log("Você já pode dirigir bebê!!!")
// } else {
//     console.log("Muita calma nessa hora, seu momento de pegar no volante não chegou!!!")
// }

// -------- Exercício 5 ---------- //

// let turno = prompt("Você estuda em qual turno? Responda M para matutino, V para vespertino, N para noturno")
// if (turno === "M") {
//     console.log("Bom dia")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if  (turno === "N") {
//     console.log("Boa noite")
// } else {
//     console.log("Digite M, V ou N por favor!")
// }

// -------- Exercício 6 ---------- //

// let turno = prompt("Você estuda M, V ou N?")
// switch (turno) {
//     case "M":
//         console.log("Bom dia")
//         break;
//     case "V":
//         console.log("Boa tarde")
//         break;
//     case "N":
//         console.log("Boa noite")
//         break;
//     default:
//         console.log("Por favor escolher entre M, V ou N!")
// }

// -------- Exercício 7 ---------- //

// let filme = prompt("Qual gênero de filme você quer ver?")
// let ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (filme === "fantasia" && ingresso < 15) {
//     console.log("Bom filme... vai beijar garanhão!!!")
// } else {
//     console.log("Escolha outro filme... perdeu a gata!")
// }

// --------- DESAFIOS ---------- //

// -------- DESAFIO 1 ---------- //

// let filme = prompt("Qual gênero de filme você quer ver?")
// let ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (filme === "fantasia" && ingresso < 15) {
//     let snack = prompt("Qual snack vc vai comprar?")
//     console.log("Bom filme... vai beijar garanhão!!!")
//     console.log("E com muito ... "+snack)
// } else {
//     console.log("Escolha outro filme... perdeu a gata!")
// }


// -------- DESAFIO 2 ---------- //

//Criando e armazenando as variáveis
let nome = prompt("Qual seu nome completo?")
let tipoDeJogo = prompt("Se for jogo internacional coloque: IN. Se for nacional coloque: DO")
let etapaDoJogo = prompt("É final? Coloque FI, É semi-final? Coloque SF, É terceiro lugar? Coloque: DT")
let categoriaNacionalSf = ["1320", "880", "550","220"]
let categoriaNacionalDt = ["660", "440", "330", "170"]
let categoriaNacionalFi = ["1980", "1320", "880", "330"]
let categoriaInternacionalSf = ["322", "215", "134","54"]
let categoriaInternacionalDt = ["161", "107", "80", "41"]
let categoriaInternacionalFi = ["483", "322", "215", "80"]


//Execução do Programa

console.log("---Dados da Compra ---")
console.log("Nome do Cliente: "+nome)

    if (tipoDeJogo === "IN") {
        console.log("Tipo do jogo: Internacional")
        if (etapaDoJogo === "FI") {
            console.log("Etapa do Jogo: Final")
            let categoriaFi = Number(prompt("Qual local do estádio vc quer? 0, 1, 2 ou 3?"))
            console.log("Categoria "+categoriaFi)
            let qtdadeIngressoFi = Number(prompt("Qual quantidade de ingressos vc quer?"))
            console.log("Quantidade de ingressos: "+qtdadeIngressoFi+" ingressos")
            console.log("--- Valores ---")
            let valorPagamentoFi = categoriaInternacionalFi[categoriaFi] * qtdadeIngressoFi
            console.log("O valor do ingresso são $ "+categoriaInternacionalFi[categoriaFi]+" dólares")
            console.log("O valor total dos ingressos são: $ "+valorPagamentoFi+" dólares")
        } else if (etapaDoJogo === "SF") {
            console.log("Etapa do Jogo: Semi-Final")
            let categoriaSf = Number(prompt("Qual local do estádio vc quer? 0, 1, 2 ou 3?"))
            console.log("Categoria "+categoriaSf)
            let qtdadeIngressoSf = Number(prompt("Qual quantidade de ingressos vc quer?"))
            console.log("Quantidade de ingressos: "+qtdadeIngressoSf+" ingressos")
            console.log("--- Valores ---")
            let valorPagamentoSf = categoriaInternacionalSf[categoriaSf] * qtdadeIngressoSf
            console.log("O valor do ingresso são $ "+categoriaInternacionalSf[categoriaSf]+" dólares")
            console.log("O valor total dos ingressos são: $ "+valorPagamentoSf+" dólares")
        } else if (etapaDoJogo === "DT") {
            console.log("Etapa do Jogo: Decisão-Terceiro-Lugar")
            let categoriaDt = Number(prompt("Qual local do estádio vc quer? 0, 1, 2 ou 3?"))
            console.log("Categoria "+categoriaDt)
            let qtdadeIngressoDt = Number(prompt("Qual quantidade de ingressos vc quer?"))
            console.log("Quantidade de ingressos: "+qtdadeIngressoDt+" ingressos")
            console.log("--- Valores ---")
            let valorPagamentoDt = categoriaInternacionalDt[categoriaDt] * qtdadeIngressoDt
            console.log("O valor do ingresso são $ "+categoriaInternacionalDt[categoria]+" dólares")
            console.log("O valor total dos ingressos são: $ "+valorPagamentoDt+" dólares")
        } else {
            console.log("Você precisa escolher entre FI, SF ou DT!")
        }
    } else if (tipoDeJogo === "DO"){
        console.log("Tipo do jogo: Nacional")
        if (etapaDoJogo === "FI") {
            console.log("Etapa do Jogo: Final")
            let categoriaDoFi = Number(prompt("Qual local do estádio vc quer? 0, 1, 2 ou 3?"))
            console.log("Categoria "+categoria)
            let qtdadeIngressoDoFi = Number(prompt("Qual quantidade de ingressos vc quer?"))
            console.log("Quantidade de ingressos: "+qtdadeIngressoDoFi+" ingressos")
            console.log("--- Valores ---")
            let valorPagamentoDoFi = categoriaNacionalFi[categoriaDoFi] * qtdadeIngressoDoFi
            console.log("O valor do ingresso são R$ "+categoriaNacionalFi[categoriaDoFi]+" reais")
            console.log("O valor total dos ingressos são: R$ "+valorPagamentoDoFi+" reais")
        } else if (etapaDoJogo === "SF") {
            console.log("Etapa do Jogo: Semi-Final")
            let categoriaDoSf = Number(prompt("Qual local do estádio vc quer? 0, 1, 2 ou 3?"))
            console.log("Categoria "+categoriaDoSf)
            let qtdadeIngressoDoSf = Number(prompt("Qual quantidade de ingressos vc quer?"))
            console.log("Quantidade de ingressos: "+qtdadeIngressoDoSf+" ingressos")
            console.log("--- Valores ---")
            let valorPagamentoDoSf = categoriaNacionalSf[categoriaDoSf] * qtdadeIngressoDoSf
            console.log("O valor do ingresso são R$ "+categoriaNacionalSf[categoriaDoSf]+" reais")
            console.log("O valor total dos ingressos são: R$ "+valorPagamentoDoSf+" reais")
        } else if (etapaDoJogo === "DT") {
            console.log("Etapa do Jogo: Decisão-Terceiro-Lugar")
            let categoriaDoDt = Number(prompt("Qual local do estádio vc quer? 0, 1, 2 ou 3?"))
            console.log("Categoria "+categoriaDoDt)
            let qtdadeIngressoDoDt = Number(prompt("Qual quantidade de ingressos vc quer?"))
            console.log("Quantidade de ingressos: "+qtdadeIngressoDoDt+" ingressos")
            console.log("--- Valores ---")
            let valorPagamentoDoDt = categoriaNacionalDt[categoriaDoDt] * qtdadeIngressoDoDt
            console.log("O valor do ingresso são R$ "+categoriaNacionalDt[categoriaDoDt]+" reais")
            console.log("O valor total dos ingressos são: R$ "+valorPagamentoDoDt+" reais")
        } else {
            console.log("Você precisa escolher entre FI, SF ou DT!")
        }
    } else {
        console.log("Só é possível escolher Internacional ou Doméstico, vamos começar dinovo?")
    }







