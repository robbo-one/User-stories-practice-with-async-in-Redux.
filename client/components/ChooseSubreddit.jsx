import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'


function ChooseSubreddit (props) {

    const [subreddit, setSubreddit] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <form>
            <label>Choose a Subreddit:</label>
            <input onChange={(e) => handleChange(e)} type="text" id="chooseSub" name="chooseSub" placeholder="wtf"></input>
            <input onClick={(e) => handleSubmit(e)} type="submit" value="Go!"></input>
        </form>
    </div>
  )
}

export default connect()(ChooseSubreddit)