import React from "react";
import "./EducationSection.scss";

const educationData = [
  {
    title: "Software Engineer Intern",
    period: "NOV 2023 - PRESENT",
    organization: "Marketifyall",
    responsibilities: [
      "Built User Interface and REST APIs for various web and mobile apps single-handedly, from scratch.",
      "Created APIs to authorize various social media platforms, resulting in automated social media posts for users.",
      "Transitioned the Firebase backend of the mobile application to Supabase PostgreSQL, leading to a significant decrease of 70% in bandwidth utilization."
    ]
  },
  {
    title: "Frontend Developer Intern",
    period: "FEB 2023 - MAY 2023",
    organization: "The Tecniq Solutions",
    responsibilities: [
      "Created and contributed to a shoe store project, showcasing proficiency in building modern web applications with React and Tailwind CSS.",
      "Improved the page loading speed by 20% by implementing techniques like code splitting, lazy loading, and image optimization by refactoring the codebase.",
      "Developed reusable UI components using ReactJS, ensuring consistency and maintainability across the application."
    ]
  },
  // Add other education sections here...
];

const EducationSection = () => {
  return (
    <div className="EducationWrapper tw-flex tw-flex-row tw-relative" id="education">
      <div className="EducationSection tw-flex-1">
        <div className="titleContainer hidden show">
          <span className="titleName">
            <span>04.</span>
            Experience
          </span>
          <div className="titleHrLine hidden show"></div>
        </div>
        {educationData.map((education, index) => (
          <div key={index} className="educationSection hidden show">
            <p className=" tw-py-2   tw-text-[#89bbfe] tw-text-2xl">
              {education.title}
            </p>
            <div className="upperTab  ">
              <h4 className="years">{education.period}</h4>
              <p className="course ">{education.organization}</p>
            </div>

            <div className="hrLine"></div>
            <div className="lowerTab">
              <ul>
                {education.responsibilities.map((responsibility, i) => (
                  <li key={i} className="institute  tw-w-full md:tw-w-[80%] " >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="tw-w-[40%] tw-hidden md:tw-flex tw-flex-col ">


      <img
        className="gifImg tw-hidden md:tw-block lg:tw-h-[60%] hidden show animate__animated animate__delay-2s tw-object-contain tw-transform tw-scale-x-[-1] tw-mt-20 "
        src="./Logo.webp"
        style={{transform: "scaleX(-1)"}}
        alt=""
        />
      <img
        className="gifImg tw-hidden md:tw-block lg:tw-h-[60%] hidden show animate__animated animate__delay-2s tw-object-contain tw-transform tw-scale-x-[-1] "
        src="./experience/user-2.png"
      
        alt="user-img-2"
        />
        </div>
    </div>
  );
};

export default EducationSection;