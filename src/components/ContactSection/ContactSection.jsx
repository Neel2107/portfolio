import React from 'react'
import "./ContactSection.scss"
const ContactSection = () => {
  return (
    <div className='contactSection'>
        <div className="contactsContainer">
            <div className="contactDetailContainer">
            
<span>05. What's Next?</span>
<span className='GIT'>Get In Touch</span>
<p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum modi laboriosam atque in. Ullam maxime sed provident, in distinctio aut deleniti! Iure voluptas necessitatibus distinctio quod voluptate! Nisi aliquam autem, optio id error harum ratione quasi eos dolores, eligendi laborum.</p>
<div className="platformContainer">
    <a href="">
        <div className="platformTab">
            <img className='platformIconImage' src="./linkdin.png" alt="" />
        </div>
    </a>
    <a href="">
    <div className="platformTab">
            <img className='platformIconImage' src="./github.png" alt="" />
        </div>
    </a>
    <a href=""><div className="platformTab">
            <img className='platformIconImage' src="./instagram.png" alt="" />
        </div>
        </a>
    <a href="">
    <div className="platformTab">
            <img className='platformIconImage' src="./twitter.png" alt="" />
        </div>
    </a>
</div>
<a href="#" className="contactBtn">Say Hello!</a>
<span className="devBy">Developed by</span>
<span className="developer">Nova</span>
            </div>
        </div>
    </div>
  )
}

export default ContactSection