import {
  SHOW_ERROR,
  REQUEST_FACTS,
  RECEIVE_FACTS
} from "../actions"

function requestFacts (state = false, action) {
  switch (action.type) {
    case REQUEST_FACTS:
      return true;
    
    case RECEIVE_FACTS:
      return false;

    case SHOW_ERROR:
      return state;
  }
}

export default requestFacts;