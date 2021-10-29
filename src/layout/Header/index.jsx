import React from 'react'
import {Link } from 'react-router-dom'

import './style.scss'
const Header = () => {
  return (
  
    <div className="l_header__wrapper">
          <div className="l_header__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hero_MotoCorp_Logo.svg/1280px-Hero_MotoCorp_Logo.svg.png" alt="" />
          </div>
          <div className="l_header_menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/otros">Otros</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/hero">Hero</Link>
                </li>
              </ul>
          </div>
    </div>
     
    

  )
}

export default Header
