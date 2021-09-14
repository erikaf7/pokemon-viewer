import React from 'react'

const Favorite = (props)=>{

        return( 
            <div>
                <button onClick = {props.addPokemon}>Favorite</button>
                <p>{props.pokemonName}</p>
            </div>
            
        )
      
}

export default Favorite