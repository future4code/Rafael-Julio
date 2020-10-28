import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Formulario = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
background-color: #00BFFF;
margin-bottom: 10px;
color: white;
`

const Campo = styled.input`
width: 97%;
height: 25px;
margin-top: 10px;
border-radius: 8px;
align-items: center;
border-style: none;
`

const Botao = styled.button`
background-color: #DAA520;
width: 100px;
height: 25px;
margin-top: 25px;
margin-bottom: 25px;
border-radius: 10px;
border-style: none;
`



class App extends React.Component {

  state = {
    listaPost: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=1"
      },
      {
        nomeUsuario: "rafael",
        fotoUsuario: "https://picsum.photos/50/50?a=2",
        fotoPost: "https://picsum.photos/200/150?a=2"
      },
      {
        nomeUsuario: "cicera",
        fotoUsuario: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/200/150?a=3"
      }
],
  
  inputNomeUsuario: "",
  inputFotoUsuario: "",
  inputPostUsuario: "",
  }

  adicionaPostUsuario = () => {
    const novaMensagem = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputPostUsuario, 
    }

    const novoPost = [...this.state.listaPost, novaMensagem]

    
      this.setState({
        listaPost: novoPost,
        inputNomeUsuario: "",
        inputFotoUsuario: "",
        inputPostUsuario: "",
      })
    

    
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value })
}

  onChangeInputFotoUsuario = (event) => {
      this.setState({ inputFotoUsuario: event.target.value })
}

  onChangeInputPostUsuario = (event) => {
    this.setState({ inputPostUsuario: event.target.value })
}


  render() {

    const listadePosts = this.state.listaPost.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <Formulario>
          <h2>Novo Post</h2>
          <Campo 
            placeholder={"Digite seu Nome..."}
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
          />
          <Campo 
            placeholder={"Digita link da sua foto..."}
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
          />
          <Campo 
            placeholder={"Coloque aqui o link do post"}
            value={this.state.inputPostUsuario}
            onChange={this.onChangeInputPostUsuario}
          />
          <Botao onClick={this.adicionaPostUsuario}>POSTAR</Botao>
        </Formulario>
        {listadePosts}
      </div>
    );
  }
}

export default App;
