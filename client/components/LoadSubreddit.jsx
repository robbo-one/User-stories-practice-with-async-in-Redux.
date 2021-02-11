import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit ({ children, dispatch }) {

  const [ subreddit , setSubreddit ] = useState('newzealand')

  const handleChange = (sub) => {
    setSubreddit(sub.target.value)
  }

  return (
    <div>
      <input type='text' name='name' onChange={handleChange} placeholder='newzealand'/>
      <button onClick={() => dispatch(fetchPosts('newzealand'))}>
    Fetch Posts
      </button>
      {children}
    </div>
  )
}

export default connect()(LoadSubreddit)
