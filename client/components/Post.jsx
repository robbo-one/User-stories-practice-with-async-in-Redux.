import React from 'react'
import moment from "moment"

function Post ({ title, date, time, summary }) {
  return (
    <>
      <div>{title}</div>
      <div>{moment.utc(date * 1000).subtract(10, 'days').calendar()}</div>
      <div>{moment.utc(time * 1000).format('LT')}</div>
      <div>{summary}</div>
    </>
  )
  
}

export default Post
