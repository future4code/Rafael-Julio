import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from "axios";
import { BASE_URL } from './constants/requests';

const DivContainer = styled.div`
  width: 100vw;
  height: 100%;  
`

const DivRockets = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
`

const DivLaunches = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
`

export default class App extends React.Component {

  state = {
    listRockets: [],
    listLaunches: []
  };

  componentDidMount() {
    this.getRockets();
    this.getLaunches();
  }

  getRockets = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/rockets`);
      this.setState({ listRockets: response.data });
    } catch (error) {
      alert(error.message);
    }
  };

  getLaunches = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/launches`);
      this.setState({ listLaunches: response.data });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {

    const renderizaListRockets = this.state.listRockets.map((item) => {
      return (
        <DivRockets>
          <h3>Nome: {item.rocket_name}</h3>
          <p>Descrição: {item.description}</p>
          <p>Valor lançamento: {item.cost_per_launch}</p>
          <a href={item.wikipedia} target="_blank"><p>Wikipedia</p></a>
        </DivRockets>
      )             
    })

    const renderizaListLaunches = this.state.listLaunches.map((item) => {
      return (
        <DivLaunches>          
          <p>Número Lançamento: {item.flight_number}</p>
          <p>Nome da Missão: {item.mission_name}</p>
          <p>Ano de Lançamento: {item.launch_year}</p>
        </DivLaunches>
      )             
    })

    return (
        <DivContainer>
          <h1>Lista de Foguetes</h1>
          <div>
            {renderizaListRockets}
          </div>
          
          <h1>Lista de Missões SpaceX</h1>
          <div>
            {renderizaListLaunches}
          </div>
          
        </DivContainer>
      
    );
  }
}
