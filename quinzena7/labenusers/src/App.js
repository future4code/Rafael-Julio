import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

const DivForm = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  margin-top: 30px;
`

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {

  state = {
    userName: "",
    userEmail: "",
    listNames: [],
    visibleList: true,
    visibleForm: true
  }

  
  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value })
  }

  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value })
  }

  componentDidMount = () =>{
    this.usersList();
  };


  usersList = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: { Authorization: "rafael-julio-tang" }
        })
      .then((response) => {
        this.setState({ listNames: response.data })
      })
      .catch((error) => {
        alert("Opsss.... deu ruim!")
      })
  };

  createUser = () => {
    
    const body = {
      name: this.state.userName,
      email: this.state.userEmail, 
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
        {
          headers: { Authorization: "rafael-julio-tang" }
        }
      )
      .then((response) => {
        this.usersList();
        this.setState({ userName: "", userEmail: "" })
        alert("Cadastro realizado com sucesso!")
      })
      .catch((error) => {
        alert("Vishiiii, não foi dessa vez!")
      });
  };

  
  changeVisibility = () => {
    this.setState({ visibleList: !this.state.visibleList})
    this.setState({ visibleForm: !this.state.visibleForm})
  };

  

  render() {

    const renderScreen = () => {
      if (this.state.visibleForm) {
        return <DivForm>
        <label>Nome</label>
        <input type="text"
          value={ this.state.userName } 
          onChange={ this.onChangeUserName }
          placeholder="Digite seu nome..."
        />
        <label>E-mail</label>
        <input type="text"
          value={ this.state.userEmail } 
          onChange={ this.onChangeUserEmail }
          placeholder="Digite seu e-mail..."
        />
        <button onClick={ this.createUser }>SALVAR</button>
      </DivForm>;
      } else {
        return <div>
        {this.state.listNames.map((user) => {
          return <p>{user.name}</p>;
        })}
      </div>
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick ={this.changeVisibility}>
              {this.state.visibleList ? "Lista de Usuários" : "Voltar Para Cadastro" }
              
            </button>
          </div>
          <DivContainer>
            {renderScreen()}
          </DivContainer>
          
          
          
        </header>
      </div>
    );
  }
}
  

export default App;
