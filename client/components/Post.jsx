import React from 'react'
import moment from 'moment'

function Post ({ title, date, selftext, url_overridden_by_dest, isYoutubeClip }) {
  return (
  <div>
    <ul>
      <li className='title'>{title}</li>
      <li className='date'>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</li>
      {selftext && (
        <li className='subtext'>{selftext}</li>
      )}
      {!isYoutubeClip && <img src={url_overridden_by_dest} />}
      {isYoutubeClip && <iframe width="560" height="315" src={(url_overridden_by_dest || '').replaceAll('youtu.be/', 'www.youtube.com/embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    </ul>
  </div>
  )
}

export default Post
