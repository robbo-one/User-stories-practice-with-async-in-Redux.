import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const RECEIVE_FACTS = 'RECEIVE_FACTS'
export const REQUEST_FACTS = 'REQUEST_FACTS'


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

export function requestFacts () {
  return {
    type: REQUEST_FACTS
  }
}

export function receiveFacts (facts) {
  return {
    type: RECEIVE_FACTS,
    facts: facts.map(fact => fact.text)
  }
}

export function fetchCatFacts () {
  return (dispatch) => {
    dispatch(requestFacts());
    return request
      .get('api/v1/catsFacts')
      .then(res => {
        console.log(res.body)
        dispatch(receiveFacts(res.body)) 
        return null;
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
