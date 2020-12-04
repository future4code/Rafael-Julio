import React from 'react';
import {DivContainer, DivHeader, LogoImg, TituloLogo, DivMain, DivFooter} from '../Main/styled';
import {ButtonList} from '../CreatePlaylists/styled'
import CreatePlaylists from '../CreatePlaylists/CreatePlaylists';
import Playlists from '../Playlists/Playlists';
import logoLabefy from '../../img/labefy.png';

export default class Main extends React.Component {

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
            <ButtonList onClick={this.changeScreen}>
              {this.state.createPlaylists ? "Ir para Playlist" : "Criar Playlists"}
            </ButtonList>
          </DivFooter>                   
        </DivContainer>
      
    );
  }
}


