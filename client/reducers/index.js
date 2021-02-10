import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import subreddits from './subreddits'
import waiting from './waiting'
import catFacts from './catFacts'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  catFacts
})
