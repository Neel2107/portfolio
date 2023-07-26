import React from "react";
import "./ProjectContainer.scss";
import anim from "./../../touch.js"
import { useEffect } from "react";

const ProjectContainer = () => {
  useEffect(() =>{
    anim();
  },[anim])
  return (
    <>
      <div className="projectContainer" id="project">
        <div className="titleContainer hidden show">
          <span className="tabNames ">
            <span>02.</span>
            Some things I've Built
          </span>
          <div className="titleHrLine "></div>
        </div>
        <div className="displayProjects hidden show">
          <div className="projectImageContainer ">
            <img className="projectImage" src="./Nike-Store.png" alt="" />
          </div>
          <div className="projectDetails">
            <span>Featured Project</span>
            <h4>Nike Shoe Store</h4>
            <div className="projectDesc">
              <p>
                {" "}
                Created and deployed a fully functional shoe store website on
                Vercel, enabling users to explore and purchase a wide range of
                products.{" "}
              </p>
            </div>
            <div className="techContainer">
              <span>Next JS</span>
              <span>Node JS</span>
              <span>Tailwind CSS</span>
              <span>Strapi</span>
            </div>
            <div className="iconsContainer">
              <a href="https://github.com/Neel2107/Shoe-Store">
                <img src="./github.png" alt="" className="socialIcons" />
              </a>
              <a href="https://shoe-store-mocha.vercel.app/">
                <img  className="socialIcons links" src="/link.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="displayProjects hidden show">
          <div
            className="projectDetails"
            style={{ textAlign: "left", flexWrap: "wrap" }}
          >
            <span>Featured Project</span>
            <h4>Hoo bank</h4>
            <div className="projectDesc">
              <p style={{ textAlign: "left" }}>
                I built and deployed a fully responsive bank website with modern
                UI/UX in ReactJS with Tailwind.
              </p>
            </div>
            <div className="techContainer">
              <span className="techName">React JS</span>
              <span className="techName">JavaScript</span>
              <span className="techName">Tailwind CSS</span>
            </div>
            <div
              className="iconsContainer"
              style={{ justifyContent: "flex-start" }}
            >
              <a href="https://github.com/Neel2107/bank-app">
                <img src="./github.png" alt="" className="socialIcons" />
              </a>
              <a href="https://bank-app-coral.vercel.app/">
                <img className="socialIcons links" src="/link.png" alt="" />
              </a>
            </div>
          </div>
          <div className="projectImageContainer">
            <img className="projectImage" src="./bank-app.png" alt="" />
          </div>
        </div>

        <div className="displayProjects hidden show">
          <div className="projectImageContainer">
            <img className="projectImage" src="./Pink-Sneaker.png" alt="" />
          </div>
          <div className="projectDetails">
            <span>Featured Project</span>
            <h4>Sneaker Webpage Design</h4>
            <div className="projectDesc">
              <p>
                {" "}
                I created a minimal and elegant-looking UI design in Photoshop.{" "}
              </p>
            </div>
            <div className="techContainer">
              <span>Adobe Photoshop</span>
             
            </div>
            <div className="iconsContainer">
              <a href="https://github.com/Neel2107/UI-Design">
                <img src="./github.png" alt="" className="socialIcons" />
              </a>
              <a href="https://neel2107.github.io/UI-Design/ui.html">
                <img className="socialIcons links " src="/link.png" alt="" />
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default ProjectContainer;
