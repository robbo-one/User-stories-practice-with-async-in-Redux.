import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import NewSubreddit from './NewSubreddit'
import StarWars from './StarWars'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'

function App () {
  return (
    <div className='app'>
      <ErrorMessage />
      <StarWars/>
      <LoadSubreddit>
      <WaitIndicator />
        <br></br>
      </LoadSubreddit>
      <NewSubreddit/>
      <SubredditList />
    </div>
  )
}

export default App
