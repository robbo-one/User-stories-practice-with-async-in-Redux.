import request from 'superagent'


export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_DOG = 'REQUEST_DOG'

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



export function requestDog (dog) {
  return {
    type: REQUEST_DOG,
    dog: dog
  }
}

export function getRandomDog () {
  const baseUrl = 'https://dog.ceo/api/breeds/'
  return (dispatch) => {
    return request.get(baseUrl + 'image/random')
    .then(res => {res.body.message
     dispatch(requestDog(res.body.message))})
  }
}
