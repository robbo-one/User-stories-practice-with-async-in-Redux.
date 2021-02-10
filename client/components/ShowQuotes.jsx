import React from 'react'

function ShowQuotes(data) {
  console.log(data)
  return (
    <div>
      <ul>
        <li>{data.quotes}</li>
      </ul>
    </div>
  )
}

export default ShowQuotes