import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

function Subreddit ({ subreddits }) {
  return (
    <div>
      {subreddits.map((post, i) =>
      <>
        <Post
          key={i}
          title={post.title}
          content={post.selftext}
          image={post.thumbnail}
          date={post.created}
        />
         {console.log(post)}
       
      </>
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

 {/* <ul>
          {console.log(post)}
         {post.selftext && Object.keys(post.selftext).map(key => {
           return <li key={key}>{key}{Date()}</li>
         })}
        </ul> */}
