import React from 'react'

function Post ({ title, post }) {
  return <div>{title} {post.created} {post.thumbnail} </div>
}

export default Post
