import React from 'react'

const Pokemon = (props)=>{

        return( 
            <div className="container">
            <img src = {props.pokemonImg}/>
             <p>ID - {props.pokemonID}</p>
            <p>Name - {props.pokemonName}</p>
            <p>Type - {props.pokemonType} {props.pokemonType2}</p>
            <button>Favorite</button>
          </div>
        )
      
}

export default Pokemon