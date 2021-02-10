import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import subreddits from './subreddits'
import waiting from './waiting'
import dog from './dog'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  dog
  
})
