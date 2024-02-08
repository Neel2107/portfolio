import React from "react";
import "./EducationSection.scss";
const EducationSection = () => {
  return (
    <div className="EducationWrapper" id="education">
      <div className="EducationSection">
        <div className="titleContainer hidden show">
          <span className="titleName">
            <span>04.</span>
            Experience
          </span>
          <div className="titleHrLine hidden show"></div>
        </div>
        <div className="educationSection hidden show">
          <p className=" tw-py-2 tw-text-[#89bbfe] tw-text-2xl">Software Engineer Intern</p>
          <div className="upperTab  ">
            <h4 className="years">NOV 2023 - PRESENT</h4>
            <p className="course ">Marketifyall</p>
          </div>

          <div className="hrLine"></div>
          <div className="lowerTab">
            <ul>
              <li className="institute">
                {" "}
                Build, style, and ship high-quality websites, mobile application
                with Next.js, React, Tailwind CSS, Prisma, MongoDB, Firebase,
                Chakra UI and Strapi.
              </li>
              <li className="institute">
                {" "}
                Contributed to a chat application, implementing responsive
                design, leading to a 1.5x user engagement boost.
              </li>
              <li className="institute">
                {" "}
                Worked on a Android app development leveraging React Native
                Expo, Tailwind CSS, displaying platform adaptability.
              </li>
            </ul>
          </div>
        </div>
        <div className="educationSection hidden show">
          <p className=" tw-py-2 tw-text-[#89bbfe] tw-text-2xl">Frontend Intern</p>

          <div className="upperTab">
            <h4 className="years">FEB 2023 - MAY 2023</h4>
            <p className="course">TechnostepUp Solutions</p>
          </div>

          <div className="hrLine"></div>
          <div className="lowerTab">
            <ul>
              <li className="institute">
                Created and contributed to a shoe store project, showcasing
                proficiency in building modern web applications with React and
                Tailwind CSS.
              </li>
              <li className="institute">
                Demonstrated adaptability and eagerness to learn by quickly
                grasping new technologies and contributing to project’s success
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="gifImg hidden show animate__animated animate__delay-2s "
        src="./Logo.webp"
        alt=""
      />
    </div>
  );
};

export default EducationSection;
