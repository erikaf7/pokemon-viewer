import React from 'react'

const FavoriteListItem = (props)=>{

    
    let thisPokemonName = props.pokemonName
        return( 
            <div>
                <p>{props.pokemonName}</p> <button onClick = {props.removePokemon}>Remove</button>
            </div>
            
        )
      
}

export default FavoriteListItem