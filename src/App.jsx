import React, { useEffect, useRef } from "react";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectContainer from "./components/projectContainer/ProjectContainer";
import "./index.scss";
import EducationSection from "./components/EducationSection/EducationSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY + window.pageYOffset}px`;
    };

    window.addEventListener("pointermove", handlePointerMove);

    // Scroll to the top when component mounts
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="App">
      <div className='leftLinks animate__animated animate__fadeIn animate__delay-2s'>
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
   
        <div className='verticalLink'></div>
      </div>
      <div className='rightLink  animate__animated animate__fadeIn animate__delay-2s   '>
        <a href="/">
         <span className='email'> neelpatel805804@gmail.com</span>
        </a>
        <div className='verticalLink'></div>
      </div>
      <div id="blur"> 
      <Navbar />
      </div>
      <div id="blob"  ref={blobRef}></div>
<div id="blur"> 

     

      <MainContainer />

      <AboutMeSection />

      <ProjectContainer />

      <OtherProjects />

      <SkillsSection />
      <EducationSection/>
      <ContactSection/>
      </div>
    </div>
  );
}

export default App;
