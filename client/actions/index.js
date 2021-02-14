import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_STARWARS = 'REQUEST_STARWARS'

export function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    // dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      // .get('/api/v1/reddit/subreddit/' + subreddit)
      .then(res => {
        dispatch(receivePosts(res.body))
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function showStarWars (starWars)  {  // This is an action creator, returns an object which has a type and potential other properties.
  return {
    type: REQUEST_STARWARS,
    starWars: starWars
  }
}


export function fetchStarWars () {
  return (dispatch) => {
    return request.get('https://swapi.dev/api/')
    .then(res => {
      // console.log(res)
      dispatch()
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}



