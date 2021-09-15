import React, { useState } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";
import FavoriteList from "./components/FavoriteList";


const App = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
  const [pokemonID, setPokemonID] = useState("1");
  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const [pokemonType, setPokemonType] = useState("grass");
  const [pokemonType2, setPokemonType2] = useState("poison");
  const [pokemonList, setPokemonList] = useState([]);

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


  const addPokemon = (pokemonName) => {
    let copy = [...pokemonList];
    copy = [...copy, {id: pokemonList.length +1, name: pokemonName}];
    setPokemonList(copy);

  }
  const removePokemon = (id) => {
    let copy = pokemonList.filter((item) => item.id !== id);
    setPokemonList(copy);
    console.log(id)

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Viewer</h1>
      </header>
      <div className="container">
      <Search  handleChange = {handleChange} handleSubmit = {handleSubmit}/>
      <Pokemon className="pokemon" pokemonData = {pokemonData} pokemonImg = {pokemonImg}pokemonID = {pokemonID} pokemonName= {pokemonName} pokemonType =  {pokemonType} pokemonType2 = {pokemonType2} addPokemon = {addPokemon} /> 
      <FavoriteList className="favorites"  pokemonList = {pokemonList}  pokemonName = {pokemonName} removePokemon = {removePokemon}/>
      </div>
      <footer>
        <p className="footer-text">Pokémon and Pokémon character names are trademarks of Nintendo.</p>
      </footer>
    </div>
  );
}

export default App;



/*
sources:

removing items from list - https://www.robinwieruch.de/react-remove-item-from-list

using ajax and api - https://www.youtube.com/watch?v=cNmn72kiZWU

*/

