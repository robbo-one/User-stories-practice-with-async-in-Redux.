import React,  { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const NewSubreddit = (props) => {
  const { children, dispatch } = props
  const [page, setPage] = useState('')




const handleChange = (value) => {
  setPage(value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  dispatch(fetchPosts(page))
}

  return (
    <div>
      <form onSubmit= {(event) => handleSubmit(event)}>
        <label>
          New subreddit::
          <input type="text" name="page" value={page} onChange={(event) => handleChange(event.target.value)} /> 
        </label>
      
      <button>
    Fetch Reddit Posts
      </button>
      </form>
      {children}
    </div>
  )
}

//  render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>

export default connect()(NewSubreddit)