import React from 'react'
import { Link } from 'react-router-dom'


import './HeaderName.css'

const HeaderName = () => {
    return (
        // Bottom sheet user select account
        <div className="headerName">
            <div className="userName_pf">
            <span>cristian__1202</span>
            </div>
            <div className="interactionSettings">
                <Link><img src="" alt="@" /></Link>
                <Link><img src='' alt='' /></Link>
                <Link><img src="" alt="O" /></Link>
            </div>
        </div>
    )
}
export default HeaderName
