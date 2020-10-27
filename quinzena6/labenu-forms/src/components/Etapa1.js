import React from "react";
import styled from "styled-components"

const Container = styled.div `
width: 40vw;
height: 100%;
margin: auto;
`

const Titulo = styled.h1`
font-size: 1.6rem;
`

class Etapa1 extends React.Component {
    
    
    render() {

        return(
            <Container>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <p>1. Qual é o seu nome?</p>
                <input type="text"/>
                <p>2. Qual sua idade?</p>
                <input type="text"/>
                <p>3. Qual seu email?</p>
                <input type="text"/>
                <p>4. Qual a sua escolaridade?</p>
                <select name="ensino">
                    <option value="">ENSINO MÉDIO INCOMPLETO</option>
                    <option value="">ENSINO MÉDIO COMPLETO</option>
                    <option value="">ENSINO SUPERIOR INCOMPLETO</option>
                    <option value="">ENSINO SUPERIOR COMPLETO</option>
                </select>
            </Container>
        )
    }
}

export default Etapa1;