import request from 'superagent'

const baseUrl = 'https://swapi.dev/api/'

export function getPeople(name){
    return request
    .get(baseUrl)
    .query({name : name})
    .query({limit: 5})
    .then(res => {
      return res.body
    })
  }

  export function getSightingsPlanet(planets){
    return request
    .get(baseUrl)
    .query({planets : planets})
    .query({limit: 5})
    .then(res => {
      return res.body
    })
  }
  

// export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'

// export function requestPosts () {
//   return {
//     type: REQUEST_POSTS
//   }
// }

// export function receivePosts (posts) {
//   return {
//     type: RECEIVE_POSTS,
//     posts: posts.map(post => post.data)
//   }
// }

// export function showError (errorMessage) {
//   return {
//     type: SHOW_ERROR,
//     errorMessage: errorMessage
//   }
// }

// export function fetchPosts (subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     return request
//       .get(`/api/v1/reddit/subreddit/${subreddit}`)
//       .then(res => {
//         dispatch(receivePosts(res.body))
//         return null
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }