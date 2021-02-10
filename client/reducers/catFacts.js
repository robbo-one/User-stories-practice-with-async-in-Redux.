import { RECEIVE_FACTS } from "../actions";

function catFacts (state = [], action) {
  switch (action.type) {
    case RECEIVE_FACTS:
      return action.facts;

    default:
      return state;
  }
}

export default catFacts;