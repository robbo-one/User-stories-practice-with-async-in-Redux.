import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit ({ children, dispatch }) {

  const [subred, setSubred] = useState("")


  const changeHandler = (evt) => {
    setSubred(evt.target.value)
  }

  return (
    <div>
      <form>
        <label> Enter subreddit: <br></br>
          <input type="text" placeholder="subreddit" name="subreddit" onChange={changeHandler}></input>
        </label>
      </form>
      <br></br>
      <button onClick={() => dispatch(fetchPosts(subred))}>
    Fetch Posts
      </button>
      <br></br>
      <br></br>
      {children}
    </div>
  )
}

export default connect()(LoadSubreddit)
