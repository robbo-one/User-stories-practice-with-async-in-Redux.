import request from 'superagent'
import { getDadJokes } from '../api/dadjoke'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const SET_DAD_JOKES = 'SET_DAD_JOKES'
// export const ADD_DAD_JOKE = 'ADD_DAD_JOKE'

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

export function setDadJokes (jokes){
  return {
    type: SET_DAD_JOKES,
    jokes: jokes
  }
}

// export function addDadJoke (joke) {
//   return {
//     type: SET_DAD_JOKES,
//     joke: joke
//   }
// }

export function fetchJokes () {
  return dispatch => {
    getDadJokes()
    .then(jokes => {
      dispatch(setDadJokes(jokes))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
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
