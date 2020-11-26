import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import { BASE_URL } from "./constants/requests";
import './App.css';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getPokemon = () => {
    axios
      .get(`${BASE_URL}?limit=151`)
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon();
  }, [pokeList]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;



