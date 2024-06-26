import React from 'react'
import '../styles/VideoCard.css'

const playButton =<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m392 743 260-169-260-169v338ZM140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680V316H140v520Zm0 0V316v520Z"/></svg>

const VideoCard = ({image,name,index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>
      <a href="#/"  >{playButton} </a>
      <p>{name}</p>
    </div>
  )
}


export default VideoCard
