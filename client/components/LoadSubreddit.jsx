import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

function LoadSubreddit (props,{ children, dispatch }) {
  // console.log(children)
  return (
    <div>
      <button onClick={() => props.dispatch(fetchPosts(props.subreddit))}>
    Fetch Posts
      </button>
      {children}
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    subreddit: globalState.subreddit
  }
} 

export default connect(mapStateToProps)(LoadSubreddit)
