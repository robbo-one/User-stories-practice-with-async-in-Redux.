import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadPokemon from './LoadPokemon'
import LoadSubreddit from './LoadSubreddit'
import Pokemon from './Pokemon'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'

function App () {
  return (
    <div className='app'>
      <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />
      <LoadPokemon >
        <WaitIndicator />
      </LoadPokemon>
    </div>
  )
}

export default App
