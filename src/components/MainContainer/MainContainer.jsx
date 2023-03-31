import React from 'react'

import "./MainContainer.scss"
const MainContainer = () => {
  return (
    <div className='mainContainer' id='Home'>
      <div className='left-links'>
        <a href="">
          <img className='icons' src="./github.png" alt="" />
        </a>
        <a href="">
          <img className='icons' src="./instagram.png" alt="" />
        </a>
        <a href="">
          <img className='icons' src="./twitter.png" alt="" />
        </a>
        <a href="">
          <img className='icons' src="./linkdin.png" alt="" />
        </a>
   
        <div className='vertical-line'></div>
      </div>
      <div className='right-link'>
        <a href="/">
         <span className='email'> neelpatel805804@gmail.com</span>
        </a>
        <div className='vertical-line'></div>
      </div>
      <div className='nameContainer'>
      <span className='title'>
        <span>Hello, </span>
        My name is
      </span>
      <span>
        Neel Patel
      </span>
      <span>I'm a self taught web developer</span>
      <p className='personal-info'>
        Software enginner who specialises in producing top-notch digital experiences. Right now i'm focusing on creating responsive websites.
      </p>

    <a href="/" className='view-work'>Look at my work!</a>
      </div>
      <div className='gifContainer'></div>
    </div>
  )
}

export default MainContainer