import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const UPDATE_SUBREDDIT = 'UPDATE_SUBREDDIT'

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
  console.log(subreddit)
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

export function updateSubreddit (subreddit) {
  return { 
    type: UPDATE_SUBREDDIT,
    subreddit: subreddit
  }
}

// export function saveWombat(wombat) {
//   // console.log('preparing the thunk (saveWombat)')
//   return dispatch => {
//     // console.log('running the thunk (saveWombat)')
//     addWombat(wombat)
//       .then(id => {
//         // console.log('saved wombat', id)
//         dispatch(fetchWombats())
//       })
//   }
// }
