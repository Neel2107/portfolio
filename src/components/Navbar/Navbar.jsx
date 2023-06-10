import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="leftLogo">
       <p className="leftLogo">Nova</p>
      </div>
      <div className="rightNav">
        <ul>
          <li>
            <a href="">
            <span href="/">01.</span>
            <span href="/">About</span>
            </a>
        
          </li>
          <li>
            <a href="">
            <span href="/">02.</span>
            <span href="/">Skills</span>
            </a>
        
          </li>
          <li>
            <a href="">
            <span href="/">03.</span>
            <span href="/">Education</span>
            </a>
        
          </li>
          <li>
            <a href="">
            <span href="/">04.</span>
            <span href="/">Projects</span>
            </a>
        
          </li>
          <li>
            <a href="">
            <span href="/">05.</span>
            <span href="/">Contact</span>
            </a>
        
          </li>
        
        
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
