import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit (props) {
  const { children, dispatch } = props

  const [page, setPage] = useState('newzealand')
  
  const handleChange = (value) => {
    setPage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchPosts(page))
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Enter New Subreddit:
          <input type='text' name='page' value={page} onChange={(event) => handleChange(event.target.value)} />
        </label>
        <button>
          Fetch Posts
        </button>
      </form>
      {children}
    </div>
  )
}

export default connect()(LoadSubreddit)
