import React from 'react'
import ChooseSubreddit from './ChooseSubreddit'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'


function App () {
  return (
    <div className='app'>
      <ErrorMessage />
      <ChooseSubreddit />
      {/* <LoadSubreddit> */}
        <WaitIndicator />
      {/* </LoadSubreddit> */}
      <SubredditList />
    </div>
  )
}

export default App
