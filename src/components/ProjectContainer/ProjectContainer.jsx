import React from "react";
import "./ProjectContainer.scss";
const ProjectContainer = () => {
  return (
    <>
      <div className="projectContainer" id="project">
        <div className="titleContainer">
          <span className="tabNames">
            <span>02.</span>
            Some things I've Built
          </span>
          <div className="titleHrLine"></div>
        </div>
        <div className="displayProjects">
          <div className="projectImageContainer">
            <img className="projectImage" src="./11.jpg" alt="" />
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
              <a href="/">
                <img src="./github.png" alt="" className="socialIcons" />
              </a>
              <a href="/">
                <img className="socialIcons" src="/projectLink.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="displayProjects">
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
              <a href="/">
                <img src="./github.png" alt="" className="socialIcons" />
              </a>
              <a href="/">
                <img className="socialIcons" src="/projectLink.png" alt="" />
              </a>
            </div>
          </div>
          <div className="projectImageContainer">
            <img className="projectImage" src="./11.jpg" alt="" />
          </div>
        </div>

        <div className="displayProjects">
          <div className="projectImageContainer">
            <img className="projectImage" src="./11.jpg" alt="" />
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
              <a href="/">
                <img src="./github.png" alt="" className="socialIcons" />
              </a>
              <a href="/">
                <img className="socialIcons" src="/projectLink.png" alt="" />
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default ProjectContainer;
