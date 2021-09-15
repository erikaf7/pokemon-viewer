import React from 'react'

const Search = (props)=>{

        return(
          <div className="search-bar">
          <form onSubmit = {props.handleSubmit}>
            <label>
              <input className="search-box" type="text" onChange = {props.handleChange} placeholder="Type a Pokémon..."/>
            </label>
            <button className="submit" onClick = {props.handleSubmit}>Search</button>
          </form>
          </div>
        )
      
}

export default Search