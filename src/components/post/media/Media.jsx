import React from 'react'
import media from '../../../assets/images/media.mp4'
import user from '../../../assets/icons/user.svg'
import audio from '../../../assets/icons/audio.svg'


import './Media.css'

export default function Media() {
  return (
    <div className="mediaScreen" >
      <video src={media} className='media'loop preload='media'></video>
      <a href="">
        <img src={user} alt="" className='redirecProfile' />
      </a>
      <a href="">
        <img src={audio} alt="" className='audio' />

      </a>

    </div>
  )
}
