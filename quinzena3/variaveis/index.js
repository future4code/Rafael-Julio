//Exercícios de Interpretação de códigos:

// Exercício1: no primeiro console.log será impresso o número 10.
//             no segundo console.log será impresso 10 5.

//Exercício2: será impresso 10 10 10.

//Exercícios de escrita de código
//Exercício1

var meuNome 
var minhaIdade 

console.log(typeof(meuNome))  
console.log(typeof(minhaIdade))  

// Como Caio falou na aula, apareceu o nome undefined pq não definimos que tipo era cada variável,
// mesmo que a definição fosse implícita no caso só de declarar uma.

var meuNome = prompt("Qual é o seu nome?") 
var minhaIdade = prompt("Qual é a sua idade?") 
// var minhaIdadeFalsa = 25 
console.log(meuNome) 
console.log(minhaIdade) 

//Deu um erro de sintaxe dizendo que minha variável tinha sido declarada,
//Qdo usei let deu esse erro, por ser uma variável de escopo, qdo coloquei
//var o código rodou, por ser uma variável do tipo global, massa isso!!!!!

console.log(typeof(meuNome)) 
console.log(typeof(minhaIdade)) 
// console.log(typeof(minhaIdadeFalsa))

//Apareceu as duas variáveis como String, acrescentei uma var minhaIdadeFalsa
//e declarei com um número e apareceu com tipo number, por ser uma caixa de texto
//e poder receber qualquer coisa ele declara string.

console.log("Olá", meuNome, ", você tem ", minhaIdade, "anos") 

//Exercício2:

var meuEndereco = prompt("Qual o seu endereço com número? Ex: Rua ABC, 123") 
var minhaIdade = prompt("Qual é a sua idade?")
var minhaProfissao = prompt("Qual é a sua profissão?")
var minhaSituacao = prompt("Você é casado(a) ou solteiro(a)?")
var meuSonho = prompt("Qual seu maior sonho?")


console.log("1. Qual o seu endereço?")
console.log("Resposta:", meuEndereco)
console.log("2. Qual é a sua idade?")
console.log("Resposta:", minhaIdade)
console.log("3. Qual é a sua profissão?")
console.log("Resposta:", minhaProfissao)
console.log("4. Você é casado(a) ou solteiro(a)?")
console.log("Resposta:", minhaSituacao)
console.log("5. Qual seu maior sonho?")
console.log("Resposta:", meuSonho) 

//Exercício3:

var comidaUsuario = prompt("Qual sua comida preferida?")
let array = ["pizza", "churrasco", "japonesa", "lazanha", "salgados"]

array[1] = comidaUsuario

console.log("Essas são as minhas comidas preferidas: ")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//Exercício4:

let perguntas = ["Você trabalha amanhã?","Você gosta de pera?","Já viajou para Suiça?"]
let respostas = ["true","false","true"]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])






















