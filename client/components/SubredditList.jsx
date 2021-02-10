import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

function Subreddit ({ subreddits }) {
  // console.log(subreddits)
  return (
    <div className="subbredit">
      {subreddits.map((post, i) =>
        <Post
          key={i}
          title={post.title}
          date={post.created_utc}
          time={post.created_utc}
          summary={post.selftext}
        />
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
