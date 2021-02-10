import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import RandPhoto from './RandPhoto'

function App () {
  return (
    <div className='app'>
      <ErrorMessage />
      <RandPhoto />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />
    </div>
  )
}

export default App
