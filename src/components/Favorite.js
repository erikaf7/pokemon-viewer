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
                <p>{props.pokemonName}</p>
            </div>
            
        )
      
}

export default Favorite