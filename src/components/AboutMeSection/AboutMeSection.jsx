import React from "react";

import  './AboutMeSection.scss';
const AboutMeSection = () => {
  return (
    <div className="aboutMeSection">
      <div className="aboutContainer">
        <div className="titleContainer">
          <span className="tabNames">
            <span>01.</span>
            About me
          </span>
          <div className="titleHrLine"></div>
        </div>
        <div className="aboutII">
            <span className="aboutInfo">
                <span>Bonjour </span>
                    it's  Neel Patel and I enjoy creating things that live on the internet.
            </span>
            <p className="aboutDisplay">
            I am a web developer who aims to find an exciting, challenging entry-level position in the industry alongside a company that will continuously motivate and drive me to do my best and improve my skills and abilities in order to be able to assist the company in achieving its missions and goals.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
