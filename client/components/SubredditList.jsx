import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

function Subreddit ({ subreddits }) {
  return (
    <div>
      {subreddits.map((post, i) =>
        <Post
          key={i}
          title={post.title}
          selftext={post.selftext}
          date={post.created_utc * 1000}
          isYoutubeClip={post['secure_media'] && post['secure_media'].type == 'youtube.com'}
          url_overridden_by_dest={post.url_overridden_by_dest}
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
