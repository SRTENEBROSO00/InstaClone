import React from 'react'
import { Link } from 'react-router-dom'
import './TabBar.css'

import home from '../../assets/icons/home.svg'
import search from '../../assets/icons/search.svg'
import add from '../../assets/icons/add.svg'
import reels from '../../assets/icons/reels.svg'
import user from '../../assets/images/user.jpeg'


export default function TabBar() {
    return (
        <div className="tabBar">
            <Link to='/' className="iconsButtons">
                <img src={home} alt="" />
            </Link>

            <Link href="" className="iconsButtons">
                <img src={search} alt="" />
            </Link>

            <Link href="" className="iconsButtons">
                <img src={add} alt="" />
            </Link>

            <Link href="" className="iconsButtons">
                <img src={reels} alt="" />
            </Link>

            <Link to='/profile' className="iconsButtons ">
                <img src={user} alt="" className='profile'/>
            </Link>
        </div>
    )
}
