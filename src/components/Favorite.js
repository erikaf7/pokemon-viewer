import React from 'react'

const Favorite = (props)=>{

        return( 
            <div>
                <button>Favorite</button>
                <p>{props.pokemonName}</p>
            </div>
            
        )
      
}

export default Favorite