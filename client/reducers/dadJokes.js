import { SET_DAD_JOKES } from '../actions'

function reducer (state = {}, action) {
  switch (action.type) {
    case SET_DAD_JOKES:
      return action.jokes
    default:
      return state
  }
}

export default reducer
