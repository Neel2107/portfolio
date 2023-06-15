import React from 'react'
import "./ContactSection.scss"
const ContactSection = () => {
    const handleButtonCLick = () =>{
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
 
    const linkdin={
        border: '2px solid rgb(46, 166, 86)',
        boxShadow: 'rgb(46, 166, 86) 1px 5px 40px',
    }

    const github ={
        border: '2px solid rgba(255, 180, 0, 0.51)',
        boxShadow: 'rgba(255, 180, 0, 0.51) 1px 5px 40px',
    }
    
    const instagarm = {
        border: '2px solid rgba(219, 54, 205, 0.882)',
        boxShadow:' rgba(219, 54, 205, 0.882) 1px 5px 40px'
    }

    const twitter={
        border: '2px solid rgba(0, 128, 255, 0.51)',
        boxShadow:' rgba(0, 128, 255, 0.51) 1px 5px 40px'
    }

  return (
    <div className='contactSection'id='contact'>
        <div className="contactsContainer">
            <div className="contactDetailContainer">
            
<span className='hidden show'>05. What's Next?</span>
<span className='GIT hidden show'>Get In Touch</span>
<p className="desc hidden show">Although I am currently new to the sector, based on my projects and talents, I would like to gain some industrial experience. I am delighted to begin a new chapter as a developer for the company.</p>
<div className="platformContainer hidden show">
    <a href="https://www.linkedin.com/in/neelpatel2107/">
        <div className="platformTab" style={linkdin}>
            <img className='platformIconImage' src="./linkdin.png" alt="" />
        </div>
    </a>
    <a href="https://github.com/Neel2107">
    <div className="platformTab" style={github}>
            <img className='platformIconImage' src="./github.png" alt="" />
        </div>
    </a>
    <a href="https://www.instagram.com/21_neeel/"><div className="platformTab" style={instagarm}>
            <img className='platformIconImage' src="./instagram.png" alt="" />
        </div>
        </a>
    <a href="https://twitter.com/notneeel">
    <div className="platformTab" style={twitter}>
            <img className='platformIconImage' src="./twitter.png" alt="" />
        </div>
    </a>
</div>
<a href="#" className="contactBtn hidden show">Say Hello!</a>
<span className="devBy hidden show">Developed by</span>
<span className="developer hidden show">Nova</span>
            </div>
        </div>
        <button  onClick={handleButtonCLick}>
    <div className="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <div className="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
    
</button>

    </div>
  )
}

export default ContactSection