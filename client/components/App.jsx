import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadQuotes from './LoadQuotes'
import ShowQuotes from './ShowQuotes'

function App () {
  return (
    <div className='app'>
      <ErrorMessage />
      <LoadQuotes />
      <ShowQuotes>
        <WaitIndicator />
      </ShowQuotes>
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />
    </div>
  )
}

export default App
