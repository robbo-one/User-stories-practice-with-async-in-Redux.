import { REQUEST_STARWARS } from '../actions'

function starWars (state = [], action) { // initial state is empty array (could be obeject or anything etc.) 
    switch (action.type) {  // takes REQUEST_STARWARS
        case REQUEST_STARWARS:
            return action.starwars

       default:
           return state 
    }
}

export default starWars