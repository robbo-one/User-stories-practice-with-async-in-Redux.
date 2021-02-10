import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit ({ children, dispatch}) {

  const [newSubreddit, setNewSubReddit] = useState('')

  const handleChange = (event) => {
    setNewSubReddit(
       event.target.value
    )}

  useEffect(() => {
    dispatch(fetchPosts('Wellington'))
  },[])

  return (
    <div>
      <form>
        <label>enter title here</label>
        <input type='text' name='name' onChange={handleChange}/>
        <button type='button' onClick={() => dispatch(fetchPosts(newSubreddit))}>
          Fetch Posts
        </button>
      </form>
      {children}
    </div>
  )
}

export default connect()(LoadSubreddit)

