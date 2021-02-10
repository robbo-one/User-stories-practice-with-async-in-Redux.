import request from 'superagent'

const baseUrl = 'https://picsum.photos/seed/picsum/200/300'

export function gtePhoto() {
    return request.get(baseUrl)
        .then(res = res.body)
}
