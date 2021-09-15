import React from 'react'

const Favorite = (props)=>{
    let pokemonName = props.pokemonName
    let addPokemon = props.addPokemon

    const handleClick = (e) => {
        e.preventDefault();
        addPokemon(pokemonName);

    }

        return( 
            <div>
                <button onClick = {handleClick}>Favorite</button>

            </div>
            
        )
      
}

export default Favorite