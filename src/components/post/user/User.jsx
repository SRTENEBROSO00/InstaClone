import React from 'react'
import { Link } from 'react-router-dom'

import './User.css'
import profile from '../../../assets/images/user.jpg'
import idk from '../../../assets/icons/idk.svg'


export default function User() {
    return (
        <div className="container-user-profile">
            <div className="imgAndUser">
                <img src={profile} alt="" />
                <Link className='nameOfUser' to=''>theloversingins</Link>
            </div>
            <div className="optionsPost">
                <img src={idk} alt="threePoints" />
            </div>
        </div>
    )
}
