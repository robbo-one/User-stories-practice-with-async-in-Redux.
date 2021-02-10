import React, { useEffect } from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import DadJokes from './DadJokes'

import { fetchJokes } from '../actions'
import { connect } from 'react-redux'

function App (props) {

  useEffect(()=> {
    props.dispatch(fetchJokes())
  }, [])



  return (
    <div className='app'>
      <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />
      <DadJokes />
    </div>
  )
}

export default connect()(App)
