import React from 'react'
import FavoriteListItem from './FavoriteListItem'

const FavoriteList = (props)=>{

        return( 
            <div className="favorites">
                <h2 className="favorites-h2">Favorites</h2>
                {props.pokemonList.map (item =>{
                return (
                    <FavoriteListItem key = {item.id} item ={item}handleToggle={props.handleToggle} handleFilter={props.handleFilter}  removePokemon = {props.removePokemon}/>
                )
            })}
            </div>
            
        )
      
}

export default FavoriteList