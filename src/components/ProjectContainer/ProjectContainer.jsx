import React from "react";
import "./ProjectContainer.scss";
import anim from "./../../touch.js";
import { useEffect } from "react";

const ProjectContainer = () => {
    useEffect(() => {
        anim();
    }, [anim]);
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
                        <img
                            className="projectImage"
                            src="./project/swiggy-ui.png"
                            alt="swiggy-ui"
                        />
                    </div>
                    <div className="projectDetails">
                        <span>Featured Project</span>
                        <h4>Swiggy UI</h4>
                        <div className="projectDesc">
                            <p>
                                This project aims to replicate the user
                                interface of the Swiggy app. Firebase
                                authentication is implemented for phone number
                                OTP verification, ensuring secure access to the
                                app.
                            </p>
                        </div>
                        <div className="techContainer">
                            <span>React Native</span>
                            <span>Nativewind</span>
                            <span>Expo</span>
                            <span>Reanimated</span>
                        </div>
                        <div className="iconsContainer">
                            <a href="https://github.com/Neel2107/swiggy-clone">
                                <img
                                    src="./github.png"
                                    alt="github"
                                    className="socialIcons"
                                />
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
                        <h4>Quick Bites</h4>
                        <div className="projectDesc">
                            <p style={{ textAlign: "left" }}>
                                Quick Bites is a web application built with
                                React.js and Swiggy's API.
                            </p>
                        </div>
                        <div className="techContainer">
                            <span className="techName">React + Vite</span>
                            <span className="techName">Tailwind CSS</span>
                            <span className="techName">Swiggy API</span>
                        </div>
                        <div
                            className="iconsContainer"
                            style={{ justifyContent: "flex-start" }}
                        >
                            <a href="https://github.com/Neel2107/QuickBites">
                                <img
                                    src="./github.png"
                                    alt=""
                                    className="socialIcons "
                                />
                            </a>
                            <a href="https://quick-bites-nova.vercel.app/">
                                <img
                                    className="socialIcons links"
                                    src="/link.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="projectImageContainer">
                        <img
                            className="projectImage"
                            src="./Quickbites.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="displayProjects hidden show">
                    <div className="projectImageContainer ">
                        <img className="projectImage" src="./1.png" alt="" />
                    </div>
                    <div className="projectDetails">
                        <span>Featured Project</span>
                        <h4>Nike Shoe Store</h4>
                        <div className="projectDesc">
                            <p>
                                {" "}
                                Created and deployed a fully functional shoe
                                store website on Vercel, enabling users to
                                explore and purchase a wide range of products.{" "}
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
                                <img
                                    src="./github.png"
                                    alt=""
                                    className="socialIcons"
                                />
                            </a>
                            <a href="https://shoe-store1.vercel.app/">
                                <img
                                    className="socialIcons links"
                                    src="/link.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="displayProjects hidden show">
                    <div className="projectImageContainer">
                        <img className="projectImage" src="./4.png" alt="" />
                    </div>
                    <div className="projectDetails">
                        <span>Featured Project</span>
                        <h4>Admin Dashboard</h4>
                        <div className="projectDesc">
                            <p>
                                {" "}
                                Developed a fully functional React JS admin
                                dashboard application with CRUD functionality
                                and interactive charts using Recharts.{" "}
                            </p>
                        </div>
                        <div className="techContainer">
                            <span>React</span>
                            <span>Node JS</span>
                            <span>SCSS</span>
                            <span>MUI</span>
                        </div>
                        <div className="iconsContainer">
                            <a href="https://github.com/Neel2107/Admin-Dashboard">
                                <img
                                    src="./github.png"
                                    alt=""
                                    className="socialIcons"
                                />
                            </a>
                            <a href="https://admin-dashboard-neel2107.vercel.app/">
                                <img
                                    className="socialIcons links "
                                    src="/link.png"
                                    alt=""
                                />
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
                                I built and deployed a fully responsive bank
                                website with modern UI/UX in ReactJS with
                                Tailwind.
                            </p>
                        </div>
                        <div className="techContainer">
                            <span className="techName">React</span>
                            <span className="techName">JavaScript</span>
                            <span className="techName">Tailwind CSS</span>
                        </div>
                        <div
                            className="iconsContainer"
                            style={{ justifyContent: "flex-start" }}
                        >
                            <a href="https://github.com/Neel2107/bank-app">
                                <img
                                    src="./github.png"
                                    alt=""
                                    className="socialIcons"
                                />
                            </a>
                            <a href="https://bank-app-coral.vercel.app/">
                                <img
                                    className="socialIcons links"
                                    src="/link.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="projectImageContainer">
                        <img className="projectImage" src="./2.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectContainer;
