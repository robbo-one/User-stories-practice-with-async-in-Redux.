import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit ({ children, dispatch }) {
  const [newSubreddit, setNewSubreddit] = useState("");

    const handleChange = (event) => {
      setNewSubreddit(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(fetchPosts(newSubreddit));
      setNewSubreddit("");
    }
    
  return (
    <div>
      <button onClick={() => dispatch(fetchPosts('newzealand'))}>
    Fetch Posts
      </button>
      {children}
      <form onSubmit={handleSubmit}>
        <input type="text" name="value" onChange={handleChange} value={newSubreddit} />
        <button>View a new subbreddit</button> 
      </form>
    </div>
  )
}

export default connect()(LoadSubreddit)
