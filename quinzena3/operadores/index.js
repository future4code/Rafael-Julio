// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//Exerçicio 1:
// false
// false
// true
// boolean


//Exercício 2:
// undefined pelo fato de declarar uma let do tipo array sem valor algum.
// a partir do momento que vc declara array = null, o tipo vai ser null.
// length significa quantidade, e no caso especifico é 11.
// número impresso será 3, dentro do array definido no exercício C, na posição [0] é 3.
// Nesse exercício soma 1 ao ítem 0, 0 + 1 = 1, que no meu array inicial é o 4, troco ele pelo 19.
// Nesse caso o i = 0, e 0 + 6 = 6, na 6 posição esta o elemento 9.

//Exercício escrita de código:
//Exercício 1:
// A)
// const idade = Number(prompt("Qual sua idade?")) //
// // B)
// const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))
// // C)
// const idadeFinal = idade > idadeAmigo
// console.log("Sua idade é maior do que seu melhor amigo?", idade > idadeAmigo) 
// // D)
// console.log(idade - idadeAmigo)

//Exercício 2:
// // A) //
// let numero = Number(prompt("Ensina qualquer número par!"))
// // B)
// console.log(numero%2)
// // C)
// //  Sempre que coloco número par o resto da divisão é 0.
// // D)
// // Se colocar qualquer númeor ímpar o resultado é sempre 1. //

// Exercício 3:
// let listaDeTarefas = []

// listaDeTarefas[0] = prompt("Qual a primeira atividade que deverá ser realizada?")
// listaDeTarefas[1] = prompt("Qual a segunda atividade que deverá ser realizada?")
// listaDeTarefas[2] = prompt("Qual a terceira atividade que deverá ser realizada?")

// console.log(listaDeTarefas)

// let indice = Number (prompt("Digita o número de uma tarefa que você já realizou, entre 0 e 2."))

// listaDeTarefas.splice(indice, 1)

// console.log(listaDeTarefas)

//Exercício 4:

// let nomeUsuario = prompt("Qual é seu nome?")
// let email = prompt ("Qual é seu e-mail?")

// console.log("O "+email+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nomeUsuario+"!")

//Desafios Extras!!!!

//Exercício 1:

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// let fahrenheit = 77
// let kelvin

// kelvin = (fahrenheit - 32)*5/9 + 273.15
// console.log("A temperatura em Kelvin é "+kelvin+"K")

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

// let celsius = 80
// let fahrenheit

// fahrenheit = (celsius)*9/5 + 32
// console.log("A temperatura em Fahrenheit é "+fahrenheit+"F.")

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

// let celsius = 30
// let fahrenheit
// let kelvin

// fahrenheit = (celsius)*9/5 + 32
// kelvin = (fahrenheit - 32)*5/9 + 273.15

// console.log("A temperatura em Fahrenheit é "+fahrenheit+"F, e a temperatura em Kelvin é "+kelvin+"K.")

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

// let celsius = Number(prompt("Qual temperatura em Celsius vc quer converter?"))
// let fahrenheit
// let kelvin

// fahrenheit = (celsius)*9/5 + 32
// kelvin = (fahrenheit - 32)*5/9 + 273.15

// console.log("A temperatura em Fahrenheit é "+fahrenheit+"F, e a temperatura em Kelvin é "+kelvin+"K.")

//Exercício 2:
//a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

// let valorFatura = ((280*24)*30)*0.05
// console.log("O valor da fatura é: "+valorFatura)

// valorFatura = (((280*24)*30)*0.05)*0.85
// console.log("O valor da fatura com desconto é: "+valorFatura)



