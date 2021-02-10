import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import WaitIndicator from './WaitIndicator'

function LoadSubreddit ({ dispatch }) {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState('')
  const handleChange = (event) => {
    setFormData (event.target.value)  
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')

    if(formData.length == 0) {
      setMessage('Enter a SubReddit')
      console.log('nothing entered')
    } else {
      console.log('Data is ready')
      console.log(formData)
      // props.updateName(formData.name)
    }
  }
  return (
    <div>
      <button onClick={() => dispatch(fetchPosts(formData))}>
    Fetch Posts
      </button>
      <WaitIndicator />

      <form onSubmit={handleSubmit}>
    {message && <span className="message">{message}</span>}
    <label>
      Request:
      <input type="text" name="name" onChange={(event) => handleChange(event)} required={true}/>
    </label>
  </form>
  
    </div>
  )
}

export default connect()(LoadSubreddit)

    {/* <label>
      form:
      <input type="text"  onChange={handleChange} />
    </label> */}
