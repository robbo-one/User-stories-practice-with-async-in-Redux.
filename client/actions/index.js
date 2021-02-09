import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECIEVE_POKEMON = 'RECIEVE_POKEMON' 

export function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

export function receivePosts (posts) {
  // console.log(posts)
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

export function recievePokemon (pokemon) {
  return {
    type: RECIEVE_POKEMON,
    pokemon: pokemon
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchPokemon (pokemon) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/pokeapi/pokemon/${pokemon}`)
      .then(res => {
        dispatch(recievePokemon(res.body))
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}


