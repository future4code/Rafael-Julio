import React from "react";
import styled from "styled-components";

const Container3 = styled.div `
width: 40vw;
height: 100%;
margin: auto;
`

const Titulo = styled.h1`
font-size: 1.6rem;
`

class Etapa3 extends React.Component {
    
    
    render() {

        return(
            <Container3>
                <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
                <p>5. Por que você não terminou a Graduação?</p>
                <input type="text"/>
                <p>6. Você fez algum curso complementar?</p>
                <select name="ensino">
                    <option value="">Nenhum</option>
                    <option value="">Curso Técnico</option>
                    <option value="">Curso de Inglês</option>                   
                </select>                
            </Container3>
        )
    }
}

export default Etapa3;