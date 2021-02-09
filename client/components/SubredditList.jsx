import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

function Subreddit ({ subreddits }) {
  return (
    <div>
      {subreddits.map((post, i) => {
      console.log(post)
        return <Post
          key={i}
          title={post.title}
          dateTime={post.created}
          selftext={post.selftext}
          thumbnail={post.thumbnail}
        />}
      )}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
