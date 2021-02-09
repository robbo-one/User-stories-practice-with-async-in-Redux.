import React from 'react'
import moment from 'moment'

function Post (props) {


  let convertedDateTime = moment.utc(props.dateTime * 1000).format('MMMM Do YYYY, h:mm:ss a')

  return (
    <div>
    <h3>{props.title}</h3>
    <ul>
    <li>{convertedDateTime}</li>
    <li>{props.selftext}</li>
    </ul>
  </div>
  )
}

export default Post
