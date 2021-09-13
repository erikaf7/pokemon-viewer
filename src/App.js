import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon";

const App = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
  const [pokemonID, setPokemonID] = useState("1");
  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const [pokemonType, setPokemonType] = useState("grass");
  const [pokemonType2, setPokemonType2] = useState("poison");


  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArray.push(res.data)
      setPokemonID(res.data.id);
      setPokemonName(res.data.name)
      setPokemonType(res.data.types[0].type.name)
      setPokemonImg(res.data.sprites["front_default"])
      if(res.data.types.length > 1){
        setPokemonType2(res.data.types[1].type.name)

      }else {
        setPokemonType2("")
      }
      setPokemonData(toArray)
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
      <Pokemon pokemonData = {pokemonData} pokemonImg = {pokemonImg}pokemonID = {pokemonID} pokemonName= {pokemonName} pokemonType =  {pokemonType} pokemonType2 = {pokemonType2}/> 
    </div>
  );
}

export default App;
