import React from 'react'
import moment from 'moment'

function Post ({ title, selftext, date, url_overridden_by_dest, isYoutubeClip }) {   //date , time and summary
  return (
  <div>
    <ul>
      <li className='title'> {title} - posted {moment(date).fromNow()} ({moment(date).format('MMMM Do h:mm:ss a')})</li>
      {selftext && (<li>{selftext}</li>
      )}
      {!isYoutubeClip && <img  width="400" height="auto"   src={url_overridden_by_dest} />}
      {isYoutubeClip && <iframe width="560" height="315" src={(url_overridden_by_dest || '').replaceAll('youtu.be/', 'www.youtube.com/embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
      </ul>
    </div>
  )}

export default Post
