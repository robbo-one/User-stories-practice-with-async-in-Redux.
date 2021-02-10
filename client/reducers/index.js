import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import subreddits from './subreddits'
import waiting from './waiting'
import quotes from './quotes'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  quotes
})
