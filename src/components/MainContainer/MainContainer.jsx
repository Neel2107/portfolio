import React from 'react'

import "./MainContainer.scss"
const MainContainer = () => {
  return (
    <>
    
    <div className='mainContainer' id='Home'>
    
      <div className='nameContainer'>
      <span className='title'>
        <span>Hello, </span>
        My name is
      </span>
      <span className='name'>
        Neel Patel
      </span>
      <span className='subtitle'>I'm a self taught web developer</span>
      <p className='personal-info'>
        Software enginner who specialises in producing top-notch digital experiences. Right now i'm focusing on creating responsive websites.
      </p>

    <a href="/" className='view-work'>Look at my work!</a>
      </div>
      <div className='gifContainer'>
        <img className='main-img' src="./coder.gif" alt="" />
      </div>
    </div>
   

    </>
  )
}

export default MainContainer