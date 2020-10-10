// --------------- Lista de Exercícios --------------- //


// ---------- Exercícios de interpretação de código --------- //

//Exercício 1.
//R. Essa função recebe a cotação do dolar pelo usuário, e retorna o valor já multiplicado pela cotação
//Fora da função foi criado uma variável de nome meuDinheiro e chama a função com o atributo 100.
//Esse valor de 100 vai ser multiplicado pela cotação e imprime no console o valor transformado.

//Exercício 2.
//Temos uma função que recebe 2 parâmetros, tipo de investimento e o valor investido.
//a função encontra o tipo e multiplica pela sua rentabilidade e retorna no final o valor investido
//com a rentabilidade.
//a primeira impressão será valor 150 * 1,1 = 165.
//a segunda impressão será tipo de investimento informado incorreto, pois ele não encontrará
// no switch o texto tesouro direto e vai imprime default.

//Exercício 3.
//O primeiro console a ser impresso é a quantidade de números e imprime 14.
//o segundo verifica os números pares, e da a quantidade que é igual a 6.
//o terceiro verifica os números impares e a quantidade é igual a 8.

//Exercício 4.
//Vai imprimir -10 e 1590 no console.


// ---------- Exercícios de Lógica de Programação --------- //

//Exercício 1.
// Da pra percorrer pelo for, pelo for of e forEach.

// const nomes = ["Rafael", "Lucas", "Amanda", "Severo", "Soter"]
// for(let i = 0; i < nomes.length; i++){
//     console.log(nomes[i])
// }

// for(nome of nomes) {
//     console.log(nome)
// }

// nomes.forEach((nome) => {
//     console.log(nome)
// })

//Exercício 2.

//A) booleano1 && booleano2 && !booleano4
//R. False.

//B) ((booleano1 && booleano2) || !booleano3)
//R. False

//C) (booleano2 || booleano3) && (booleano4 || booleano1)
//R. True

//D) !(booleano2 && booleano3) || !(booleano1 && booleano3)
//R. True

//E) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//R. True

//Exercício 3.

// const quantidadeDeNumerosPares = Number(prompt("Quantidade de números pares"))
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

//Exercício 4.
// let a = Number(prompt("Qual o tamanho do lado A?"))
// let b = Number(prompt("Qual o tamanho do lado B?"))
// let c = Number(prompt("Qual o tamanho do lado C?"))

// if (a === b && b === c) {
//     console.log("Esse triângulo é Equilátero")
// } else if ( a === b || b === c ) {
//     console.log("Esse triângulo é Isósceles")
// } else {
//     console.log("Esse triângulo é Escaleno")
// }

//Exercício 5.
// let numero1 = Number(prompt("Digite o primeiro número!"))
// let numero2 = Number(prompt("Digite o segundo número"))

// //i)
// if ( numero1 > numero2) {
//     console.log(`O número maior é: ${numero1}`)
// } else if (numero1 < numero2) {
//     console.log(`O número maior é: ${numero2}`)
// } else {
//     console.log(`Os dois números são iguais`)
// }

//ii)
// if (numero1 % numero2 === 0) {
//     console.log(`O número ${numero1} é divisível por ${numero2}`)
// } else {
//     console.log(`O número ${numero1} não é divisível por ${numero2}`)
// }

// if (numero2 % numero1 === 0) {
//     console.log(`O número ${numero2} é divisível por ${numero1}`)
// } else {
//     console.log(`O número ${numero2} não é divisível por ${numero1}`)
// }

//iii)
// if (numero1 - numero2 > 0) {
//     console.log(numero1-numero2)
// } else {
//     console.log(numero2-numero1)
// }


// ---------- Exercícios de Funções --------- //

//Exercício 1.

// const numeros = [25, 12, 55, 64, 121, 44, 5, 11, 84, 51, 136, 48, 14, 73, 111, 283]
// let segundoMaior = 0
// let segundoMenor = 1000
// let maiorNumero = 0
// let menorNumero = 1000

// function maiorMenorNumero(array) {
    
    // for(let numero of array) {
    //     if (numero > maiorNumero){
    //         maiorNumero = numero
    //     }
    // }

    // for(let numero of array) {
    //     if((numero > segundoMaior) && ( numero !== maiorNumero)){
    //         segundoMaior = numero
    //     } 
    // }

//     for(let numero of array) {
//         if (numero < menorNumero){
//             menorNumero = numero
//         }
//     }

//     for(let numero of array) {
//         if((numero < segundoMenor) && ( numero !== menorNumero)){
//             segundoMenor = numero
//         } 
//     }

//     console.log(`O segundo maior número é: ${segundoMaior}`)
//     console.log(`O segundo menor número é: ${segundoMenor}`)
// }

// maiorMenorNumero(numeros)

//Exercício 2.

// let imprima = () => {
//     alert("Hello Future4");
// }

// imprima()


// ---------- Exercícios de Objetos --------- //

//Exercício 1.
//Arrays são variáveis que podem armazenar várias informações,
//que são ordenados em índices começando do 0 e indo até ao final,
//podendo armazenar inclusive funções.
//Objetos são variáveis que armazenam várias informações também,
//inclusive gera dúvida qdo é array e objeto.
//Devemos usar array qdo queremos colocar várias informações,
//em ordem e iterar uma a uma através das funções forEach, map e filter.
//devemos usar objetos só para armazenar informações e buscar depois.


//Exercício 2.

// let criaRetangulo = (lado1,lado2) => {
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: (2 * (lado1 + lado2)),
//         area: lado1 * lado2
//     }

//     console.log(retangulo)
// }

// criaRetangulo(3,5)


//Exercício 3.

// const filme = {
//     titulo:   "Senhor dos Anéis",
//     ano:      2001,
//     diretor:  "Peter Jackson",
//     atores:   ["Elijah Wood", "Sean Astin", "Ian McKellen"]
// }

// console.log(`Venham assistir ao filme: ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)


//Exercício 4.

// const dadosCadastrais = {
//     nome: "Rafael Julio",
//     idade: 36,
//     email: "rafa@rafaeljulio.dev",
//     endereco: "Av. José Leon, 1078"
// }

// const anonimizarPessoas = (dados) => {
//     const dadosAnonimos = {
//         ... dados,
//         nome: "Anônimo"
//     }

//     console.log(dadosAnonimos)
// }

// anonimizarPessoas(dadosCadastrais)


// ---------- Exercícios de Funções de Arrays --------- //

//Exercício 1.

// let array = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

//a) Faça uma função que retorne um novo array só com os adultos 
//(pessoas com idade igual ou superior a 20)
// const novoArray = array.filter(pessoas => pessoas.idade >= 20);
// console.log(novoArray)

//b) Faça uma função que retorne um novo array só com as 
//crianças/adolescentes (pessoas com idade inferior a 20)
// const novoArray = array.filter(pessoas => pessoas.idade < 20);
// console.log(novoArray)

//Exercício 2.
// const array = [1, 2, 3, 4, 5, 6]
// //A)
// const multiplicaDois = array.map(function(item){
//     return (item * 2);
// })

// console.log(multiplicaDois)

//B)
// const multiplicaTres = array.map(function(item){
//     return String(item * 3);
// })

// console.log(multiplicaTres)

//C)
// const parImpar = array.map(function(item){
//     if (item % 2 === 0){
//         console.log(`${item} é par`)
//     } else {
//         console.log(`${item} é ímpar`)
//     }
// })

//Exercício 3.

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

//A)
// const podeEntrar = pessoas.filter(function(item){
//     if (item.idade > 14 && item.idade < 60 && item.altura >= 1.5){
//         return item
//     } 
// })

// console.log(podeEntrar)

//B)
// const naoPodeEntrar = pessoas.filter(function(item){
//     if (item.idade < 14 || item.idade > 60 || item.altura <= 1.5){
//         return item
//     } 
// })

// console.log(naoPodeEntrar)


//Exercício 4.

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]



const consultasAgendadas = consultas.map(function(item) {
    if (item.cancelada === false){
        console.log(`Olá, ${item.genero} ${item.nome}. Estamos enviando esta mensagem para ${item.genero} da sua consulta no dia ${item.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
    } else {
        console.log(`Olá, ${item.genero} ${item.nome}. Infelizmente, sua consulta marcada para o dia ${item.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
    }
})
