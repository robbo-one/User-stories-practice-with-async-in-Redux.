import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchQuotes } from '../actions'

function LoadQuotes (props) {
  const { children, dispatch } = props

  const [page, setPage] = useState('')
  
  const handleChange = (season, episode) => {
    setPage(season, episode)
    dispatch(fetchQuotes(page))
  }

  return (
    <div>
        <button onClick={(event) => handleChange(event.target.value)}>
          Fetch Quote
        </button>
      {children}
    </div>
  )
}

export default connect()(LoadQuotes)
