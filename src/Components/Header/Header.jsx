import React from 'react'
import "./Header.css"
import {MenuOutlined } from '@ant-design/icons';
function Header() {
  return (
    <header className='header'>
 <nav>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo"><strong style={{color:"blue"}}>v</strong>ms</div>
        <ul className="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>

    
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
  
 
  </header>
  )
}

export default Header