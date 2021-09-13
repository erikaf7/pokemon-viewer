import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const [pokemonData, setPokemonData] = useState([])

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      console.log(res)
    } catch (e){
      console.log(e)
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Viewer</h1>
      </header>
      <form onSubmit = {handleSubmit}>
        <label>
          <input type="text" onChange = {handleChange} placeholder="Type a Pokémon..."/>
        </label>
      </form>
    </div>
  );
}

export default App;
