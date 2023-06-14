import React from 'react'

import "./MainContainer.scss"
const MainContainer = () => {
  return (
    <>
    
    <div className='mainContainer' id='Home'>
    
      <div className='nameContainer'>
      <span className='title  animate__animated animate__fadeInUp' style={{ animationDelay: "1.1s"}}   >
        <span style={{fontSize:'20px'}}>Hello, </span>
        My name is
      </span>
      <span className='name  animate__animated animate__fadeInUp ' style={{ animationDelay: "1.2s"}}>
        Neel Patel
      </span>
      <span className='subtitle animate__animated animate__fadeInUp ' style={{ animationDelay: "1.3s"}}>I'm a self taught web developer</span>
      <p className='personal-info animate__animated animate__fadeInUp ' style={{ animationDelay: "1.4s"}}>
        Software engineer  who specialises in producing top-notch digital experiences. Right now i'm focusing on creating responsive websites.
      </p>

    <a href="/" className='view-work animate__animated animate__fadeIn' style={{ animationDelay: "1.5s"}}>Look at my work!</a>
      </div>
      <div className='gifContainer animate__animated animate__fadeIn ' style={{ animationDelay: "1.7s"}}>
        <img className='main-img' src="./coder.gif" alt="" />
      </div>
    </div>
   

    </>
  )
}

export default MainContainer