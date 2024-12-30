import React from 'react'
import User from './user/User'
import Media from './media/Media'
import Interaction from './interaction/Interaction'
import Coments from './coments/Coments'
import './Post.css'
import Time from './time/Time'

export default function Post() {
  return (
    <div className="container-main-post">
      <User />
      <Media />
      <Interaction/>
      <Coments/>
      <Time/>
    </div>
  )
}
