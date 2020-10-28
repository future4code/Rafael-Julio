import React from "react";
import styled from "styled-components";

const ContainerFinal = styled.div `
width: 40vw;
height: 100%;
margin: auto;
`

const Titulo = styled.h1`
font-size: 1.6rem;
`

class Final extends React.Component {
    
    
    render() {

        return(
            <ContainerFinal>
                <Titulo>O FORMULÁRIO ACABOU</Titulo>
                <h2>Muito obrigado por participar! Entraremos em contato</h2>             
            </ContainerFinal>
        )
    }
}

export default Final;