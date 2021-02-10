import { RECEIVE_QUOTES } from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_QUOTES:
      return action.season && action.episode

    default:
      return state
  }
}

export default subreddits
