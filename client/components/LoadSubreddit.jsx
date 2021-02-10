
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'


function LoadSubreddit (props) {

  let [subreddit, setSubreddit] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setSubreddit = e.target.value
  }

  const handleClick = (e) => {
    e.preventDefault()
    props.dispatch(fetchPosts(setSubreddit))
  }

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault() ; dispatch(fetchPosts({setSubreddit}))}} >
        <label>Enter Subreddit:</label>
        <input onChange={(e) => handleChange(e)} type="text" name="subreddit" placeholder="WTF?"></input>
        <input onClick={(e) => handleClick(e)} type="submit" value="Get Posts!"></input>
      </form>
    </div>
  )
}

export default connect()(LoadSubreddit)
