import React from 'react'

const Search = (props)=>{

        return(
          <div className="search-bar">
          <form onSubmit = {props.handleSubmit}>
            <label>
              <input type="text" onChange = {props.handleChange} placeholder="Type a Pokémon..."/>
            </label>
            <button onClick = {props.handleSubmit}>Search</button>
          </form>
          </div>
        )
      
}

export default Search