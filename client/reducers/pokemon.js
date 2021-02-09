import { RECEIVE_POKEMON } from '../actions'

function pokemon (state = [], action) {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon

    default:
      return state
  }
}

export default pokemon