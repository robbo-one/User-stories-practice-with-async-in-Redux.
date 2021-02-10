import React from 'react'

function Post ({ title, dateTime, summary, thumbnail }) {
  return (
  <div>
    <h3>{title}</h3>
    <p>{dateTime}</p>
    <p>{summary}</p>
    <img src={thumbnail}></img>
  </div>
  )
}

export default Post
