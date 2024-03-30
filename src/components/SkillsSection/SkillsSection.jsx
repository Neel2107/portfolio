import React, { useEffect, useRef, useState } from "react";
import "./SkillsSection.scss";
import { skillsCardsData } from "../../../public/skillsLogos/skillsCardsData";

const SkillsSection = () => {
 
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

        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-items-center tw-justify-center  ">
          {skillsCardsData.map((item, index) => {
            const isReactLogo =
              item.name === "React" || item.name === "React Native";
            const animationDelay = `${index * 0.2}s`; // 0.2s delay increment for each

            return (
              <div
                key={index}
                className="tw-flex tw-flex-col tw-gap-2 tw-justify-between tw-items-center tw-h-[120px]  tw-p-2 animate__animated animate__fadeIn hidden show "
                style={{ animationDelay: animationDelay }} // Apply the delay
              >
                <img
                  src={item.icon}
                  height={75}
                  width={75}
                  alt={`${item.name} icon`}
                  className={`tw-aspect-square ${
                    isReactLogo ? "react-spin" : ""
                  }`}
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
