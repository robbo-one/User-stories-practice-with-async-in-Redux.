import React from 'react'
import moment from 'moment'

function Post (props) {

  let showThumbnail = false
  if(props.thumbnail == "self") {
    showThumbnail = false
  }
  else {
    showThumbnail = true
  }

  let convertedDateTime = moment.utc(props.dateTime * 1000).format('MMMM Do YYYY, h:mm:ss a')

  return (
    <div>
    <h3>{props.title}</h3>
    <ul>
    <li>{convertedDateTime}</li>
    {!showThumbnail && (<li>{props.selftext}</li>)}
    {showThumbnail && (<div><img src={props.thumbnail}/></div>)}
    </ul>
  </div>
  )
}

export default Post
