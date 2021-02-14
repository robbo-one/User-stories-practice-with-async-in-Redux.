import React from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/apis/cards'

function LoadPlanets ({ children, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch(fetchCards('ColorizedHistory'))}>
    Fetch Posts (History in Colour)
      </button>
      {children}
    </div>
  )
}

export default connect()(LoadSubreddit)
