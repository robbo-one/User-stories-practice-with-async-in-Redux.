import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_QUOTES = 'REQUEST_QUOTES'

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

export function requestQuotes () {
  return {
    type: REQUEST_QUOTES
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

export function fetchQuotes (season, episode) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`https://the-office-api.herokuapp.com/season/${season}/episode/${episode}`)
      .then(res => {
        dispatch(receivePosts(res.body))
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
