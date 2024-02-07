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
    <div className="navbar animate__animated animate__fadeIn">
      
      <div className="leftLogo animate__animated animate__backInDown " id="logo" onClick={handlelogoCLick}>
       <a href="#top" className="leftLogo">Nova</a>
      </div>
      <div className="rightNav">
        <ul>
          <li className="animate__animated animate__backInDown " style={{animationDelay: "50ms"}}>
          <a  href="#about" onClick={handleAboutClick}>
            <span  className="nums" href="#about">01.</span>
            <span className="about" href="/">About</span>
            </a>
        
          </li>
          <li className="animate__animated animate__backInDown" style={{animationDelay: "100ms"}} >
            <a  href="#project" onClick={handleProjectsClick}>
            <span className="nums" href="/">02.</span>
            <span className="projects" href="/">Projects</span>
            </a>
        
          </li>
          <li className="animate__animated animate__backInDown"  style={{animationDelay: "150ms"}}>
            <a  href="#skills" onClick={handleSkillsClick}>
            <span  className="nums" href="/">03.</span>
            <span className="skills" href="/">Skills</span>
            </a>
        
          </li>
          <li className="animate__animated animate__backInDown" style={{animationDelay: "200ms"}}>
            <a  href="#education"  onClick={handleEducationSection}>
            <span  className="nums" href="/">04.</span>
            <span className="education" href="/">Education</span>
            </a>
        
          </li>
          <li className="animate__animated animate__backInDown" style={{animationDelay: "250ms"}}>
            <a  href="#contact" onClick={handleContactClick}>
            <span  className="nums" href="/">05.</span>
            <span className="contact" href="/">Contact</span>
            </a>
        
          </li>
          <li className="animate__animated animate__backInDown" style={{animationDelay: "300ms"}}>
            <a  href="https://drive.google.com/file/d/1QzKjHsrlKisq8ITQ1Umgg9s0MjxY2Q1y/view?usp=sharing" onClick={handleContactClick}>
            <span  className="nums" href="/">06.</span>
            <span className="resume" href="/">Resume</span>
            </a>
        
          </li>
        
        
         
        </ul>
      </div>
      <button className="toggleBtn animate__animated animate__backInDown">
        <img className="pyramid" src="./pyramid.png" alt="" />
      </button>
    </div>
  );
};

export default Navbar;
