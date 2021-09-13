import React from 'react'

const Search = (props)=>{

        return( 
            <form onSubmit = {props.handleSubmit}>
            <label>
              <input type="text" onChange = {props.handleChange} placeholder="Type a Pokémon..."/>
            </label>
            <button onClick = {props.handleSubmit}>Search</button>
          </form>
        )
      
}

export default Search