import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPokemon } from '../actions'
import Pokemon from './Pokemon'

function LoadPokemon ({ children, dispatch, pokemon }) {
  
  const [ pokeSearch , setPokeSearch ] = useState('charmander')

  const handleChange = (e) => {
    setPokeSearch(e.target.value)
  }

  return (
    <>
      <div>
        <input type='text' name='name' onChange={handleChange} placeholder='charmander'/>
        <button onClick={() => dispatch(fetchPokemon(pokeSearch))}>
        Fetch Pokemon
        </button>
        {children}
      </div>
      <div>
        <Pokemon 
          name={pokemon.name} 
          order={pokemon.order}
          image={pokemon.sprites.official-artwork.front_default}
        />
      </div>
    </>

  )
}

export default connect()(LoadPokemon)