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
          <p className=" tw-py-2   tw-text-[#89bbfe] tw-text-2xl">
            Software Engineer Intern
          </p>
          <div className="upperTab  ">
            <h4 className="years">NOV 2023 - PRESENT</h4>
            <p className="course ">Marketifyall</p>
          </div>

          <div className="hrLine"></div>
          <div className="lowerTab">
            <ul>
              <li className="institute">
                Built User Interface and REST APIs for various web and mobile
                apps single-handedly, from scratch.
              </li>
              <li className="institute">
                Created APIs to authorize various social media platforms,
                resulting in automated social media posts for users.
              </li>
              <li className="institute">
                Transitioned the Firebase backend of the mobile application to
                Supabase PostgreSQL, leading to a significant decrease of 70% in
                bandwidth utilization.
              </li>
            </ul>
          </div>
        </div>
        <div className="educationSection hidden show">
          <p className=" tw-py-2 tw-text-[#89bbfe] tw-text-2xl">
            Frontend Developer Intern
          </p>

          <div className="upperTab">
            <h4 className="years">FEB 2023 - MAY 2023</h4>
            <p className="course">The Tecniq Solutions</p>
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
                Improved the page loading speed by 20% by implementing
                techniques like code splitting, lazy loading, and image
                optimization by refactoring the
                codebase.
              </li>
              <li className="institute">
              Developed reusable UI components using ReactJS, ensuring consistency and maintainability across the application.
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
