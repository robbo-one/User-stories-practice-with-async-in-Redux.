import request from 'superagent'

const baseUrl = 'https://icanhazdadjoke.com/'

export function getDadJokes() {
  return request
    .get(baseUrl)
    .set({'Accept': 'application/json'})
    .then(res => {
      // console.log(res.body)
      return res.body
    })
}