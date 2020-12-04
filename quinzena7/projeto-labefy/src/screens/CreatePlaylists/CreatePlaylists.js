import React from "react";
import axios from "axios";
import { BASE_URL, axiosConfig } from "../../constants/requests";
import { DivMainPlaylist, DivPlaylist, TituloLabel, InputPlaylist, ButtonList, DivPlay, VisualPlay, TitlePLay, DivPlayList, ButtonPlay } from '../CreatePlaylists/styled'

export default class CreatePlaylists extends React.Component {

  state = {
    inputNamePlaylist: "",
    playLists: []
  }
  
  componentDidMount = () => {
    this.showPlayLists()
  }

  changeInputNameValue = (e) => {
    this.setState({inputNamePlaylist: e.target.value})    
  }

  createPlaylist = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.inputNamePlaylist
    };

    axios.post(BASE_URL, body, axiosConfig)
    .then(() => {
      alert('Playlist cadastrada com sucesso')
    })
    .catch(error => [
      console.log(error)
    ]);
    this.setState({inputNamePlaylist: ""});
  };

  showPlayLists = () => {
    axios.get(BASE_URL, axiosConfig)
    .then(response => {
        this.showPlayLists();
        this.setState({playLists: response.data.result.list})
    })
    .catch(error => {
        console.log(error)
    })
    
  };

  deletPlayList = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`, axiosConfig)
      .then(() => {
        this.showPlayLists();
        alert("Playlist deletada com sucesso!");
      })
      .catch((error) => alert(error.message));
  };


render() {
  
  const renderList = this.state.playLists.map((item) => {
    return (
      <DivPlayList key={item.id}>
        - {item.name}
        <ButtonPlay onClick={() => this.deletPlayList(item.id)}>X</ButtonPlay>
      </DivPlayList>
    );
  })

  return (
    
    <DivMainPlaylist>
      <DivPlaylist>
        <h3>Adicione sua Playlist</h3>
        <TituloLabel>Nome da Playlist:</TituloLabel>
        <InputPlaylist
          placeholder="Nome da Playlist"
          type="text"
          value={this.state.inputNamePlaylist}
          onChange={this.changeInputNameValue}
        />
        <ButtonList onClick={this.createPlaylist}>Adicionar Playlist</ButtonList>          
      </DivPlaylist>
      <DivPlay>
          <TitlePLay>Suas Playlists</TitlePLay>
          <VisualPlay>
            {renderList}
          </VisualPlay>         
      </DivPlay>
    </DivMainPlaylist>  

    

    );
  }
}
