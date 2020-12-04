import React from 'react';
import './App.css';
import styled from 'styled-components';
import CreatePlaylists from './screens/CreatePlaylists/CreatePlaylists';
import Playlists from './screens/Playlists/Playlists';
import logoLabefy from './img/labefy.png';

const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`

const DivHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-bottom: 2px ridge white;
`

const LogoImg = styled.img`
  height: 60px;
`

const TituloLogo = styled.p`
  font-size: 24px;
  color: white;
`

const DivMain = styled.div`
  width: 100vw;
  height: 80vh;
`

const DivFooter = styled.div`
  width: 100vw;
  height: 10vh;
  border-top: 1px solid white;
`
      
export default class App extends React.Component {

  state = {
    createPlaylists: true
  };

  changeScreen = () => {
    this.setState({ createPlaylists: !this.state.createPlaylists });     
  };

  render() {
    return (
        <DivContainer>          
          <DivHeader>
              <LogoImg src={logoLabefy} alt="Logotipo" />
              <TituloLogo>Labefy</TituloLogo>
          </DivHeader>
        
          <DivMain>
            {this.state.createPlaylists ? <CreatePlaylists /> : <Playlists />}
          </DivMain>

          <DivFooter>
            <button onClick={this.changeScreen}>
              {this.state.createPlaylists ? "Ir para Playlist" : "Criar Playlists"}
            </button>
          </DivFooter>                   
        </DivContainer>
      
    );
  }
}


