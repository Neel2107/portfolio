import React from "react";
import "./Navbar.scss";

const Navbar = () => {

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    const offsetTop = aboutSection.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };
  const handleProjectsClick = () => {
    const projctSection = document.getElementById("project");
    const offsetTop = projctSection.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  const handlelogoCLick = () =>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleSkillsClick = () =>{
    const skillsSection = document.getElementById("skills")
    const offsetTop = skillsSection.offsetTop
    window.scrollTo(({top: offsetTop, behavior:"smooth"}))
  }

  const handleEducationSection = () =>{
    const educationSection = document.getElementById("education")
    const offsetTop = educationSection.offsetTop
    window.scrollTo({top: offsetTop, behavior: "smooth"})
  }

const handleContactClick = ()=>{
  const contactSection =document.getElementById("contact")
  const offsetTop = contactSection.offsetTop
  window.scrollTo({top: offsetTop, behavior: "smooth"})
}

  return (
    <div className="navbar">
      
      <div className="leftLogo" id="logo" onClick={handlelogoCLick}>
       <a href="#top" className="leftLogo">Nova</a>
      </div>
      <div className="rightNav">
        <ul>
          <li>
          <a href="#about" onClick={handleAboutClick}>
            <span href="#about">01.</span>
            <span href="/">About</span>
            </a>
        
          </li>
          <li>
            <a href="#project" onClick={handleProjectsClick}>
            <span href="/">02.</span>
            <span href="/">Projects</span>
            </a>
        
          </li>
          <li>
            <a href="#skills" onClick={handleSkillsClick}>
            <span href="/">03.</span>
            <span href="/">Skills</span>
            </a>
        
          </li>
          <li>
            <a href="#education" onClick={handleEducationSection}>
            <span href="/">04.</span>
            <span href="/">Education</span>
            </a>
        
          </li>
          <li>
            <a href="#contact" onClick={handleContactClick}>
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
