import React from 'react'
import FavoriteListItem from './FavoriteListItem'

const FavoriteList = (props)=>{

        return( 
            <div>
                <h2>Favorites</h2>
                {props.pokemonList.map (poke =>{
                return (
                    <FavoriteListItem  handleToggle={props.handleToggle} handleFilter={props.handleFilter} pokemonName={props.pokemonName} removePokemon = {props.removePokemon}/>
                )
            })}
            </div>
            
        )
      
}

export default FavoriteList