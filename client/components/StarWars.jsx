import React,  { useState } from 'react'
import { connect } from 'react-redux'
import { fetchStarWars } from '../actions'


const StarWars = (props) => {
    return (
        <div>
        
      <button onClick={() => props.dispatch(fetchStarWars())}>
    Fetch Star Wars 
      </button>
        </div>
    )
    
}

export default connect()(StarWars)