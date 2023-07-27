import React, { useEffect, useRef } from "react";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import SkillsSection from "./components/SkillsSection/SkillsSection";
// import ProjectContainer from "./components/projectContainer/ProjectContainer";
import "./index.scss";
import EducationSection from "./components/EducationSection/EducationSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ProjectContainer from './components/ProjectContainer/ProjectContainer';

function App() {

  const blobRef = useRef(null);


  

  useEffect(() => {
    const blob = blobRef.current;
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
      
      <div className="leftLinks animate__animated animate__fadeIn animate__delay-2s">
        <a className="leftLinksIcons" href="https://github.com/Neel2107">
          <svg
            // style={{ width: "20px", padding: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="  icons"
          >
            <title>GitHub</title>
            <path className="pathHover" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a className="leftLinksIcons" href="https://www.instagram.com/21_neeel/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class=" icons "
          >
            <title>Instagram</title>
            <rect  className="pathHover" x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path  className="pathHover" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a className="leftLinksIcons" href="https://twitter.com/notneeel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icons"
          >
            <title>Twitter</title>
            <path  className="pathHover" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a className="leftLinksIcons" href="https://www.linkedin.com/in/neelpatel2107/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icons"
          >
            <title>LinkedIn</title>
            <path  className="pathHover" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect  className="pathHover" x="2" y="9" width="4" height="12"></rect>
            <circle  className="pathHover" cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <div className="verticalLink"></div>
      </div>
      <div className="rightLink  animate__animated animate__fadeIn animate__delay-2s   ">
        <a className="myEmail" href="https://mail.google.com/mail/u/0/#inbox?compose=new">
          <span className="email"> neelpatel805804@gmail.com</span>
        </a>
        <div className="verticalLink"></div>
      </div>
      <div className="firstBlur" id="blur">
        <Navbar />
      </div>
      <div id="blob" ref={blobRef}></div>
      <div id="blur">
        <MainContainer />

        <AboutMeSection />

        {/* <ProjectContainer /> */}
        <ProjectContainer/>

        <OtherProjects />

        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
