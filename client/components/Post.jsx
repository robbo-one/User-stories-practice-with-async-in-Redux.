import React from 'react'

function Post ({ title, created, selftext }) {
  return (
    <div>
      <h5>
      {title}
      <em>({(new Date(created * 1000)).toString()})</em>
      </h5>
      <p> {selftext} </p>
    </div>
    )
}

export default Post
