import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Post from './Post'

function Subreddit ({ subreddits }) {
  console.log(subreddits)
  return (
    <div>
      {subreddits.map((post, i) =>
        <Post
          key={i}
          title={post.title}
          dateTime = {moment.utc(post.created_utc * 1000).format('MMMM Do YYYY, h:mm:ss a')}
          summary = {post.selftext}
          thumbnail = {post.thumbnail}
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
