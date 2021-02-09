import React from 'react'

function Post ({ title, selftext, created }) {
  return (
    <div>
      <h3>
        {title} 
        <em>({(new Date(created * 1000)).toString()})</em>
      </h3>
      <p> - {selftext}</p>   
    </div>
  )
}

export default Post
