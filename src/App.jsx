import React, { useEffect, useRef } from "react";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectContainer from "./components/projectContainer/ProjectContainer";

import "./index.scss";

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

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="App">
      <div className='leftLinks'>
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
      <div className='rightLink'>
        <a href="/">
         <span className='email'> neelpatel805804@gmail.com</span>
        </a>
        <div className='verticalLink'></div>
      </div>
      <div id="blob" ref={blobRef}></div>
<div id="blur"> 

      <Navbar />

      <MainContainer />

      <AboutMeSection />

      <ProjectContainer />

      <OtherProjects />

      <SkillsSection />
      </div>
    </div>
  );
}

export default App;
