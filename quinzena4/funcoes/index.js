//-----------INTERPRETAÇÃO----------//

//EXERCÍCIO 1.

//A) O que vai ser impresso no console?
//R. Vai ser impresso 10 e 50.

//B) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a 
//função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//R. Ele faz a operação e guarda o valor 10 e 50, porém no console não aparece nada.

//EXERCÍCIO 2.

//A) Explicite quais são as saídas impressas no console.
//R. Ele vai passar pelo arrayDeNomes e pegar só o i com valor 0 e 1 imprimindo
//Darvas e Goli no console.

//B) Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
//. Seria impresso Amanda e Caio.


//EXERCÍCIO 3.

//Essa função pega o array e depois verifica se o número é par, se encontrar par ele cria
//o arrayFinal com todos os números pares multiplicando por ele mesmo.
// O nome melhor seria verificaParMultiplica.

// ---------- ESCRITA DE CÓDIGO --------- //

//EXERCÍCIO 4

//A) função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
//informações sobre você, como: 

//R.
// const infoPessoais = () => {
//     console.log("Eu sou Rafael, tenho 36 anos, moro em Fortaleza e sou estudante.")
    
// }

// infoPessoais()


//B) Agora escreva uma função que receba 4 parâmetros que correspondem às informações 
//de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que 
//representa se é estudante ou não. Ela deve retornar uma string que unifique todas as 
//informações da pessoa em uma só mensagem com o template:

// let nome,
//     idade,
//     cidade,
//     estudante;

// const infoPessoais = (nome, idade, cidade, estudante) => {
    
//     if (estudante === true) {
//         estudante = "sou estudante!"
//     } else {
//         estudante = "não sou estudante!"
//     }
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)
        
// }

// infoPessoais("Rafael", 36, "Fortaleza", true)

//EXERCÍCIO 5.

//A) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função 
//e imprima no console o resultado.
//R.

// const funcaoSomar = (number1, number2) => {
//     const soma = number1 + number2
//     return soma
    
// }

// console.log(funcaoSomar(4, 4))

//B) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
//primeiro número é maior ou igual ao segundo.
//R.

// const funcaoSomar = (number1, number2) => {
//     const result = number1 >= number2
//     return result
// }

// console.log(funcaoSomar(10,8))


//C) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa 
//mensagem 10 vezes. (não é permitido escrever 10 console.log dentro da função, use outra 
//estrutura de código para isso)

// const imprimirString = () => {
//     for (let i = 0; i < 10; i++) {
//         console.log("Até que não foi difícil!")
//     }
// }

// imprimirString()

//EXERCÍCIO 6.

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//A) Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
//R.

// const arrayNumbers = (arrayNumeros) => {
//     let qtdadeElementos = arrayNumeros.length
//     return qtdadeElementos
// }

// console.log(arrayNumbers(array))


//B) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

// const numeroPar = (a) => {
//     if (a % 2 === 0) {
//         console.log(true)
//     }
// }

// numeroPar(5)

//C) Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele.
//R.

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const arrayNumbers = (arrayNumeros) => {
    
//     const arrayFinal = [];
//     for (let num of arrayNumeros) {
//        if (num % 2 === 0) {
//            arrayFinal.push(num)
           
//         }
           
//     }
//     return arrayFinal
// }

// console.log(arrayNumbers(array).length)

//C) Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do 
//item b para verificar se o número é par
//R.

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const arrayNumbers = (arrayNumeros) => {
    
//     for (let num of arrayNumeros) {
//        if (numeroPar(num) === true){
            
//        }
                  
//     }
    
// }

// console.log(arrayNumbers(array))
