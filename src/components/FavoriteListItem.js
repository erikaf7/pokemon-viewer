import React from 'react'

const FavoriteListItem = (props)=>{

        return( 
            <div>
                <button onClick = {props.addPokemon}>Favorite</button>
                <p>{props.pokemonName}</p>
            </div>
            
        )
      
}

export default FavoriteListItem