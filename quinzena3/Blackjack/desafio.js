/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack.");
 if(confirm("Quer iniciar uma nova rodada?")) {
    //comprando as cartas do Player e do PC.
   const cartasPlayer = [comprarCarta(),comprarCarta()]
   const cartasPc = [comprarCarta(),comprarCarta()]

   //Primeira regra, as duas cartas não pode ser AA. 
   if (cartasPlayer[0].valor === 11 && cartasPlayer[1].valor === 11) {
      cartasPlayer[0] = comprarCarta()
      cartasPlayer[1] = comprarCarta()
   } else if (cartasPc[0].valor === 11 && cartasPc[1].valor === 11) {
      cartasPc[0] = comprarCarta()
      cartasPc[1] = comprarCarta()
   }
   
   let cartasTextosUser = [cartasPlayer[0].texto,cartasPlayer[1].texto]
   let pontosPlayer = cartasPlayer[0].valor + cartasPlayer[1].valor
   while( pontosPlayer < 21 && confirm(`Suas cartas são: ${cartasTextosUser}. A carta revelada do computador é ${cartasPc[0].texto}. Deseja comprar mais uma carta?`))   {
      cartasPlayer.push(comprarCarta())
      let i = 2
      cartasTextosUser.push(cartasPlayer[i].texto)
      pontosPlayer = pontosPlayer + cartasPlayer[i].valor
      i++
               
   }

   let cartasTextosPc = [cartasPc[0].texto, cartasPc[1].texto]
   let pontosComputador = cartasPc[0].valor + cartasPc[1].valor

   if (pontosPlayer > 21) {
      alert(`Suas cartas são: ${cartasTextosUser}. Sua pontuação é ${pontosPlayer}. As cartas do computador são ${cartasTextosPc}. A pontuação do computador é ${pontosComputador}. O computador ganhou!`)
   } else {
      
      while (pontosComputador < 21 && pontosComputador <= pontosPlayer) {
         cartasPc.push(comprarCarta())
         let e = 2 
         cartasTextosPc.push(cartasPc[e].texto)
         pontosComputador = pontosComputador + cartasPc[e].valor
         e++
      }
   
      if (pontosComputador > 21) {
         alert(`Suas cartas são: ${cartasTextosUser}. Sua pontuação é ${pontosPlayer}. As cartas do computador são ${cartasTextosPc}. A pontuação do computador é ${pontosComputador}. Você ganhou, parabéns chuchu!`)
      } else if (pontosComputador > pontosPlayer){
         alert(`Suas cartas são: ${cartasTextosUser}. Sua pontuação é ${pontosPlayer}. As cartas do computador são ${cartasTextosPc}. A pontuação do computador é ${pontosComputador}. Não foi dessa vez bebe, o Computador ganhou!`)
      } else {
   
      }
   }

} else {
   console.log("O jogo acabou");
}

