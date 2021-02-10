import React from 'react'

function Post ({ title, selftext, url_overridden_by_dest, isYoutubeClip }) {
  return (
  <div>
    <ul>
      <li className='title'>{title}</li>
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
