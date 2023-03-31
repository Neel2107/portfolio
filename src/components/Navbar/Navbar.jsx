import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-logo">
        <img src="./vite.svg" alt="" />
      </div>
      <div className="right-nav">
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
            <span href="/">Skiils</span>
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
