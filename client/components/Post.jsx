import React from 'react'

function Post ({ title, content, image, date }) {

  function convertDate (date) {
    let utc = date
    let d = new Date(0)
    d.setUTCSeconds(utc)
    return d.toString()
  }

  return (
  <div>
    {title}
    <br/>
    {convertDate(date)}
    <br/>
    <br/>
    {content}
    <br/>
    <img src={`${image}`} alt='pic'/>
    
  </div>
  )
}

export default Post
