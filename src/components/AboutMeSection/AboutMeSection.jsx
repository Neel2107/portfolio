import React, { useEffect } from "react";
import anim from "./../../touch"
import  './AboutMeSection.scss';
const AboutMeSection = () => {
  useEffect(() =>{
    anim();
  },[anim])
  return (
    <>
  
    <div className="aboutMeSection" id="about">
      <div className="aboutContainer">
        <div className="titleContainer hidden show">
          <span className="tabNames">
            <span>01.</span>
            About me
          </span>
          <div className="titleHrLine"></div>
        </div>
        <div className="mainAboutContainer">
        <div className="aboutII hidden show">
            <span className="aboutInfo hidden show">
                <span>Bonjour </span>
                    it's  Neel Patel and I enjoy creating things that live on the internet.
            </span>
            <p className="aboutDisplay">
            I am a web developer who aims to find an exciting, challenging entry-level position in the industry alongside a company that will continuously motivate and drive me to do my best and improve my skills and abilities in order to be able to assist the company in achieving its missions and goals.
            </p>
        </div>
        </div>
       
      </div>
    </div>
 
    </>
  );
};

export default AboutMeSection;
