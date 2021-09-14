import React from 'react'

const FavoriteListItem = (props)=>{
    let removePokemon = props.removePokemon

    const handleClick = (e) => {
        e.preventDefault();
        removePokemon(props.item.id);

    }

        return( 
            <div>
                <p id={props.item.id} key ={props.item.id}>{props.item.name}</p> <button onClick = {handleClick}>Remove</button>
            </div>
            
        )
      
}

export default FavoriteListItem