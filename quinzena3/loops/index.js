// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//Exercício 1:

// Esse código está em loop passando pelo 0 até 4.
//Porém cada vez que ele passa, ele soma o próximo valor de i a variável valor.
//Somando: 1 + 2 + 3 + 4 = 10, que será o valor impresso no final.

//Exercício 2:

//R: Esse código passa por todos elementos do array e qdo um é maior do que 18, ele imprime.
//Deixando impresso: 19, 21, 23, 25, 27, 30.

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0

// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }

//   console.log(linha)
//   quantidadeAtual++
// }

//Exercício 3:

// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') 
// que seja composto somente de números. Após o enunciado, há um exemplo de qual deve 
// ser a resposta final de cada programa individualmente.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A. Escreva um programa que:

// - **Imprima** cada um dos valores do array original.

// for (let numero of arrayOriginal){
//     console.log(numero)
// }

// B. Escreva um programa que:
// - **Imprima** cada um dos valores do array original divididos por 10

// for (let numero of arrayOriginal){
//     console.log(numero/10)
// }

// C. Escreva um programa que:
// - **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array

// let novoArray = []
// for (let numero of arrayOriginal) {
//     if (numero%2 === 0) {
//     novoArray.push(numero)
//     }
// }
// console.log(novoArray)

// D. Escreva um programa que:
// - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array

// const arrayStrings = []
// let index = 0
// for(let i of arrayOriginal){
//     arrayStrings.push(index)
//     console.log(`O elemento do index ${index++} é ${i}`)
// }

// E. Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let maiorNumero = 0
// let menorNumero = 150
// for (let numero of arrayOriginal) {
//     if (maiorNumero < numero){
//         maiorNumero = numero
//     }
// }
// for (let num of arrayOriginal)
// if (menorNumero > num) {
//     menorNumero = num
// }

// console.log(`O maior número é: ${maiorNumero} e o menor é: ${menorNumero}`)

// DESAFIO 2:

// if(confirm("Quer iniciar uma nova rodada?")){
//     const numero = Number(prompt("Escolha um número qualquer!"))
//     let chute = Number(prompt("Tente adivinhar o número que eu escolhi"))
//     let index = 1
//     while (chute !== numero) {
//         if (chute < numero) {
//             console.log("Seu número é menor do que o que eu escolhi!")
//         } else {
//             console.log("Seu número é maior do que o que eu escolhi!")
//         }
//         index++
//         chute = Number(prompt("Tente acertar o número que eu escolhi"))
        
//     }

//     console.log(`Parabéns, você acertou! O número que eu escolhi é o: ${numero} em ${index} tentativas.`)

// } else {
//     console.log("O jogo acabou!")
// }

//Desafio 3:

// if(confirm("Quer iniciar uma nova rodada?")){
//     const numero = Math.floor((Math.random() * 100) + 1);
//     let chute = Number(prompt("Tente adivinhar o número que eu escolhi"))
//     let index = 1
//     while (chute !== numero) {
//         if (chute < numero) {
//             console.log("Seu número é menor do que o que eu escolhi!")
//         } else {
//             console.log("Seu número é maior do que o que eu escolhi!")
//         }
//         index++
//         chute = Number(prompt("Tente acertar o número que eu escolhi"))
        
//     }

//     console.log(`Parabéns, você acertou! O número que eu escolhi é o: ${numero} em ${index} tentativas.`)

// } else {
//     console.log("O jogo acabou!")
// }

//Considerações: foi extremamente fácil, em vez de pedir no prompt foi só sortear.
//Inclusive na documentação do W3School deu a linha de comando pra fazer de 1 a 100.
//Na verdade só não entendi a sinxtaxe do pq Math.random() * 100) + 1.
//Só acreditei que daria certo e coloquei no meu código.