import React from 'react'
import FavoriteListItem from './FavoriteListItem'

const FavoriteList = (props)=>{

        return( 
            <div>
                <h2>Favorites</h2>
                {props.pokemonList.map (poke =>{
                return (
                    <FavoriteListItem poke = {poke} handleToggle={props.handleToggle} handleFilter={props.handleFilter} />
                )
            })}
            </div>
            
        )
      
}

export default FavoriteList