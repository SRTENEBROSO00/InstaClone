import React from 'react'
import './profileStatus.css'
import user from '../../../assets/images/user.jpeg'

// recuerda el JSON para hacer los cambios reales
export default function ProfileStatus() {
  return (
    <div className="profileFriends">
      <div className="circle">
        <img src={user} alt="userPic" className='user' />
      </div>
      <div className="name">
        <span>Armando Liot</span>
      </div>
    </div>
  )
}
