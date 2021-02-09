import React from 'react'

function Post ({ title, selftext }) {
  return (
  <div>
    <ul>
      <li>{title}</li>
      <li>{selftext}</li>
    </ul>
  </div>
  )
}

export default Post
