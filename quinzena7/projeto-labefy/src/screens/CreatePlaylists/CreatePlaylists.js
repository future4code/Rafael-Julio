import React from "react";
import axios from "axios";
import { BASE_URL, axiosConfig } from "../../constants/requests";
import { MainContainer, DivPlaylist, TituloLabel, InputPlaylist, ButtonList } from '../CreatePlaylists/styled'

export default class CreatePlaylists extends React.Component {

                              
render() {
  return (
      
    <MainContainer>
      <DivPlaylist>
        <h3>Adicione sua Playlist</h3>
        <TituloLabel>Nome da Playlist:</TituloLabel>
        <InputPlaylist type="text" />
        <ButtonList>Adicionar Playlist</ButtonList>          
      </DivPlaylist>
      

    </MainContainer>

    );
  }
}
