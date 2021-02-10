import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Dog from './Dog'

function App () {
  return (
    <div className='app'>
      <ErrorMessage />
      <Dog />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />
    </div>
  )
}

export default App
