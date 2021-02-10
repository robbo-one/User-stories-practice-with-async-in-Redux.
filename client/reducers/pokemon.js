import { RECIEVE_POKEMON } from '../actions'

function pokemon (state = {}, action) {
  console.log(action)
  switch (action.type) {
    case RECIEVE_POKEMON:
      console.log(action)
      return action.pokemon

    default:
      return state
  }
}

export default pokemon