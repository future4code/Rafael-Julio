import React from "react";
import axios from "axios";
import { DivMainPlaylist, DivPlaylist, InputPlaylist, ButtonPlay, ButtonList} from '../CreatePlaylists/styled'
import { DivPlay, VisualPlay, TitlePLay } from '../CreatePlaylists/styled'
import {DivRender} from './styled'
import { BASE_URL, axiosConfig } from "../../constants/requests";

export default class Playlists extends React.Component {
  
  state = {
    playLists: [],
    musicList: [],    
    nameMusic: "",
    artistMusic: "",
    linkMusic: "",
    idPLayList: ""
  }

  componentDidMount = () => {
    this.showPlayLists();    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.idPLayList !== this.state.idPLayList) {
     this.listTracks()     
    }
    if (prevState.musicList !== this.state.musicList){
      this.listTracks()
    }
 }

  changeInputName = (e) => {
    this.setState({nameMusic: e.target.value})   
  }

  changeInputAuthor = (e) => {
    this.setState({artistMusic: e.target.value})    
  }

  changeInputLink = (e) => {
    this.setState({linkMusic: e.target.value})    
  }

  listTracks = () => {
    axios.get(`${BASE_URL}/${this.state.idPLayList}/tracks`, axiosConfig)
      .then(response => {
        this.setState({musicList: response.data.result.tracks})        
      })
      .catch(error => {
        console.log(error)
      });
  }

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.nameMusic,
      artist: this.state.artistMusic,
      url: this.state.linkMusic
    };  

  axios.post(`${BASE_URL}/${this.state.idPLayList}/tracks`, body, axiosConfig)
        .then(() => {
            alert("Música Cadastrada com Sucesso na sua Playlist")
        })
        .catch(error => {
          console.log(error);
        });
        
        this.setState({
          nameMusic: "",
          artistMusic: "",
          linkMusic: ""
        })
  }

  showPlayLists = () => {
    axios.get(BASE_URL, axiosConfig)
    .then(response => {
        this.showPlayLists();
        this.setState({playLists: response.data.result.list});        
    })
    .catch(error => {
        console.log(error)
    })    
  };

  deletTrackFromPlaylist = (id) => {
    axios.delete(`${BASE_URL}/${this.state.idPLayList}/tracks/${id}`, axiosConfig)
    .then(() => {
        this.listTracks();
    })
    .catch(error => {
        console.log(error);
    });
  };


  render() {
    const renderList = this.state.playLists.map((item) => {
      return (
        <option value={item.id} key={item.id}>{item.name}</option>
      );
    })

    const renderMusic = this.state.musicList.map((item) => {
      return (
        <DivRender key={item.id}>
          <p>- {item.artist} / {item.name}</p>
          <audio src={item.url} controls></audio>
          <ButtonPlay onClick={() => this.deletTrackFromPlaylist(item.id)}>X</ButtonPlay>
        </DivRender>
      )
    })
    

    return (
      <DivMainPlaylist>
      <DivPlaylist>
        <h3>Adicione Músicas</h3>
        <select 
          value={this.state.idPLayList}
          onChange={e => this.setState({ idPLayList: e.target.value })}
          name="select">
          <option value="" disabled>Selecionar Playlist</option>
          {renderList}       
        </select>
        <InputPlaylist
          placeholder="Nome do Artista"
          type="text"
          value={this.state.artistMusic}
          onChange={this.changeInputAuthor}          
        />
        <InputPlaylist
          placeholder="Nome da Música"
          type="text"
          value={this.state.nameMusic}
          onChange={this.changeInputName}          
        />
        <InputPlaylist
          placeholder="Link do áudio com https"
          type="text"
          value={this.state.linkMusic}
          onChange={this.changeInputLink}          
        />
        
        <ButtonList onClick={this.addTrackToPlaylist} >Adicionar Música</ButtonList>         
      </DivPlaylist>
      <DivPlay>
          <TitlePLay>Suas Músicas:</TitlePLay>
          <VisualPlay>
            {renderMusic}
          </VisualPlay>         
      </DivPlay>
    </DivMainPlaylist>  
    );
  }
}
