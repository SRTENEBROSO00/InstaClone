import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo/Instagram-Logo.png'
import like from '../../assets/icons/like.svg'
import idk from '../../assets/icons/idk.svg'
import shere from '../../assets/icons/shere.svg'
import comments from '../../assets/icons/comments.svg'
import './Header.css'


export default function Header() {
  return (
    <div className='header-container'>
        
        <img src={logo} alt="logoInstagram" className='logoInstgrm' role='img'/>
        
        <div className="buttonsNotify">
            <Link href="">
                <img src={like} alt="like" />
            </Link>
            <Link href=""><img src={comments} alt="" /></Link>
        </div>
    </div>
  )
}
  