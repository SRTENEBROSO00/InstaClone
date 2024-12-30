import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Interaction.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import like from '../../../assets/icons/liked.svg'
import comment from '../../../assets/icons/comments.svg'
import shere from '../../../assets/icons/shere.svg'
import save from '../../../assets/icons/save.svg'



export default function Interaction() {
  const [like, setLike] = useState(false);
  return (

    <div className="main">
      <div className="interaction-main-container">
        <div className="button-interaction">

          <Link to="">
            <img src={like} alt="" />
          </Link>
          <Link to="">
            <img src={comment} alt="" />
          </Link>
          <Link to="">
            <img src={shere} alt="" />
          </Link>
        </div>
        <div className="save">
          <img src={save} alt="" />
        </div>
      </div>
      <div className="seeLike">
        <Link to="">Les gusta a sr.lordTenebroso</Link>
      </div>
    </div>
  )
}
