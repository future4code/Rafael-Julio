import React from "react";
import styled from "styled-components";
import Etapa1 from '../src/components/Etapa1';
import Etapa2 from '../src/components/Etapa2';
import Etapa3 from '../src/components/Etapa3';
import Final from '../src/components/Final';
import './App.css';

const Botao = styled.button`
height: 30px;
margin-top: 20px;
border: 1px solid white;
background-color: black;
color: white;
`

class App extends React.Component {
  
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3: 
        return <Etapa3 />;
      case 4: 
        return <Final />;
      default:
        return <div>"Erro! Página não encontrada!"</div>
    }
  }

  irParaProximaEtapa = () => {
        
      const valor = this.state.etapa + 1;
      this.setState({ etapa: valor});       
            
  }

  render() {
    
    return (
      <div className="App">
          {this.renderizaEtapa()}
          <Botao onClick={this.irParaProximaEtapa}>PRÓXIMA ETAPA</Botao>
      </div>
    );
  }
}

export default App;