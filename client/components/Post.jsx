import React from 'react'

function Post ({ title, selftext, created }) {
  return (
    <div>
      <h4>{title} -- 
        <em>({(new Date(created * 1000)).toString()})</em>
      </h4>
        <p>-- {selftext} --</p>
    </div>
  )
}

export default Post
