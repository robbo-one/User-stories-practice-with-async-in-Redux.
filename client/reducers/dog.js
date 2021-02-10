import {REQUEST_DOG} from '../actions'

function veryGoodBoy ( state = '', action) {
  switch(action.type){
    case REQUEST_DOG:
      return action.dog
      default:
        return state
  }
}

export default veryGoodBoy