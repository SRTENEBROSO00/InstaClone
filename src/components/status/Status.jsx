import React from 'react'
import user from '../../assets/images/user.jpg'
import './Status.css'
import ProfileStatus from './profileStatus/ProfileStatus'



export default function Status() {
  return (
    <div className='container-status'>
      {/* add story */}
      <ProfileStatus/>
      {/* friends story */}
      <ProfileStatus/>
      <ProfileStatus/>
      <ProfileStatus/>
      <ProfileStatus/>
      <ProfileStatus/>
      <ProfileStatus/>
    </div>
    


  )
}
