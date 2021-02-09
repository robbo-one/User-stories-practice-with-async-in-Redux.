import { UPDATE_SUBREDDIT } from '../actions'



function subreddit (state = "", action) {
  switch (action.type) {
    case UPDATE_SUBREDDIT:
        console.log(action.subreddit)
      return action.subreddit

    default:
      return state
  }
}

export default subreddit
