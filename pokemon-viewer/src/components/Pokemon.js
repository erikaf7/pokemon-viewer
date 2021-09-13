import React from 'react'
import Favorite from './Favorite'

const Pokemon = (props)=>{

        return( 
            <div className="container">
            <img src = {props.pokemonImg}/>
             <p>ID - {props.pokemonID}</p>
            <p>Name - {props.pokemonName}</p>
            <p>Type - {props.pokemonType} {props.pokemonType2}</p>
            <Favorite pokemonName= {props.pokemonName} />
          </div>
        )
      
}

export default Pokemon