import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit ({ children, dispatch }) {

  const [ subreddit, setSubreddit ] = useState('newzealand')

  const handlechange = (event) => {
    setSubreddit(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchPosts(subreddit))
  }
  return (
    <div>
      <button onClick={() => dispatch(fetchPosts('newzealand'))}>
      
    Fetch Posts
      </button>  
      <br></br>
      <br></br>
      {children}
    <form onSubmit={handleSubmit}>
    <input type='text' name='name' onChange={handlechange} placeholder='newzealand'/>
    <button>New Subreddit</button>
    </form>
    </div>
  )
}

export default connect()(LoadSubreddit)
