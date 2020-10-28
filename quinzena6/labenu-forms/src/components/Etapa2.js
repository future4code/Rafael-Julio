import React from "react";
import styled from "styled-components"

const Container2 = styled.div `
width: 40vw;
height: 100%;
margin: auto;
`

const Titulo = styled.h1`
font-size: 1.6rem;
`

class Etapa2 extends React.Component {
    
    
    render() {

        return(
            <Container2>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                <p>5. Qual curso?</p>
                <input type="text"/>
                <p>6. Qual a unidade de ensino?</p>
                <input type="text"/>                
            </Container2>
        )
    }
}

export default Etapa2;