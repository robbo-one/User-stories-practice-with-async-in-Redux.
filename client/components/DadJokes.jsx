import { connect } from 'react-redux'
import React from 'react'
import { fetchJokes } from '../actions'



function DadJokes(props){
  const joke = props.joke
  
  const clickHandler = () => {
    props.dispatch(fetchJokes())
  }

 
  return(
    <div>
      <p>Random dad joke: {joke.joke}</p>
      <button onClick={clickHandler}>Get another dad joke</button>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    joke: globalState.dadJokes
  }
}

export default connect(mapStateToProps)(DadJokes)