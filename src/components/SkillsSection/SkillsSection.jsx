import React from "react";
import "./SkillsSection.scss";

const SkillsSection = () => {
  const skillsCardsData = [
    {
      name: "HTML",
      icon: "/skillsLogos/html.svg",
    },
    {
      name: "CSS",
      icon: "/skillsLogos/css.svg",
    },
    {
      name: "JavaScript",
      icon: "/skillsLogos/javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "/skillsLogos/typescript.svg",
    },
    {
      name: "Next.JS",
      icon: "/skillsLogos/nextjs.svg",
    },
    {
      name: "React",
      icon: "/skillsLogos/react.svg",
    },
    {
      name: "React Native",
      icon: "/skillsLogos/react.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/skillsLogos/tailwindcss.svg",
    },
    {
      name: "Charka UI",
      icon: "/skillsLogos/chakraui.svg",
    },
    {
      name: "Sass",
      icon: "/skillsLogos/sass.svg",
    },
    {
      name: "Bootstrap",
      icon: "/skillsLogos/bootstrap.svg",
    },
    {
      name: "Git",
      icon: "/skillsLogos/git.svg",
    },
    {
      name: "GitHub",
      icon: "/skillsLogos/github.svg",
    },
   
  ];
  return (
    <div className="skillsSection" id="skills">
      <div className="scContainer">
        <div className="titleContainer hidden show">
          <span className="tabNames">
            <span>03.</span>
            Technologies I've worked with
          </span>
          <div className="titleHrLine"></div>
        </div>

        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-items-center tw-justify-center ">
          {skillsCardsData.map((item, index) => {
                  const isReactLogo = item.name === "React" || item.name === "React Native";

            return (
              <div key={index} className="tw-flex tw-flex-col tw-gap-2 tw-justify-between tw-items-center tw-h-[120px]  tw-p-2 ">
                <img
                  src={item.icon}
                  height={75}
                  width={75}
                  alt="skill-icon"
                  className={`tw-aspect-square ${isReactLogo ? "react-spin" : ""}`}
                  />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default SkillsSection;
