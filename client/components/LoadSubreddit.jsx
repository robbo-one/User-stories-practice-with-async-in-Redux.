
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'


function LoadSubreddit ({ children, dispatch }) {

  let [subreddit, setSubreddit] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setSubreddit = e.target.value
    console.log(setSubreddit)
  }

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault() ; dispatch(fetchPosts('newzealand'))}} >
        <label>Enter Subreddit:</label>
        <input onChange={(e) => handleChange(e)} type="text" name="subreddit" placeholder="WTF?"></input>
        <input type="submit" value="Get Posts!"></input>
      </form>
      {children}
    </div>
  )
}

export default connect()(LoadSubreddit)
