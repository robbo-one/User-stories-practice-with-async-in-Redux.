import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import subreddits from './subreddits'
import waiting from './waiting'
import pokemon from './pokemon'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  pokemon
})
