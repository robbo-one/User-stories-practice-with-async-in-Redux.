import React from "react"
import moment from 'moment'

function Post(props) {
  const d = moment.utc(props.date*1000).local().format('MMMM Do YYYY, h:mm:ss a')
  console.log(props.preview)
  return (
    <div>
      <div><strong>Title: </strong> {props.title}</div>
      <div><strong>Date Posted: </strong>{d}</div>
      {props.preview != '' ? <div><strong>Preview: </strong> {props.preview}</div> : <div>No preview.</div>}
      <br></br>
    </div>
  )
}

export default Post
