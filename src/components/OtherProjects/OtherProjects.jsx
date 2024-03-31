import React, { useEffect } from "react";
import "./OtherProjects.scss";
import anim from "./../../touch.js";
const OtherProjects = () => {
  useEffect(() => {
    anim();
  }, [anim]);

  const projectData = [
    {
      title: "Task Tracker",
      description: "Developed a task tracker app in React Native with Expo and Reanimated, enabling team task management and assignment.",
      tech: ["React Native", "Reanimated"],
      link: "https://github.com/Neel2107/react-native-journal-app",
      image: "./folder.svg"
    },
    {
      title: "Pomo-Time",
      description: "Pomo-Time is a web app that helps increase productivity using the Pomodoro Technique with customizable timers and progress tracking.",
      tech: ["ReactJS", "CSS"],
      link: "https://github.com/Neel2107/PomoTime",
      image: "./folder.svg"
    },
    {
      title: "Quillaudits",
      description: "Crafted a fully responsive web homepage for Quillaudits using Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://github.com/Neel2107/QuillAudits",
      image: "./folder.svg"
    },
    {
      title: "Image Gallery",
      description: "Created an intuitive image gallery website utilizing the Unsplash API, enabling users to easily search and discover high-quality images.",
      tech: ["React JS", "Unsplash API"],
      link: "https://image-gallery-neel2107.vercel.app/",
      image: "./folder.svg"
    },
    {
      title: "JokeBox",
      description: "Designed and developed an engaging web app featuring a sleek, modern interface, delivering a continuous stream of humor with a single click.",
      tech: ["React JS", "API"],
      link: "https://github.com/Neel2107/JokeBox.git",
      image: "./folder.svg"
    },
    {
      title: "Tirupur Homes",
      description: "Crafted a captivating and responsive landing page using HTML, CSS, and JavaScript for a client in the real estate industry.",
      tech: ["HTML", "CSS"],
      link: "https://tirupur-homes.vercel.app/",
      image: "./folder.svg"
    },
  ];
  return (
   
    <div className="otherNoteworthyProjects">
      <h1 className="otherTitle">Other Noteworthy Projects</h1>
      <div id="cardContainerRes" className="cardContainer">
        {projectData.map((project, index) => (
          <div key={index} id="card" className="hidden show">
            <div className="container">
              <div className="upperPart">
                <a href={project.link}>
                  <img className="cardIcon" src={project.image} alt="" />
                </a>
                <div
                  style={{
                    width: "100%",
                    alignItems: "flex-end",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <a className="link-box" href={project.link}>
                    <img className="new-github" src="newGithub.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="cardDetailContainer">
                <a href={project.link} className="projectName">
                  {project.title}
                </a>
                <p className="projectDesc">{project.description}</p>
                <div className="techContainer">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="techUsed">{tech}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;

// old code
 // <div className="otherNoteworthyProjects">
    //   <h1 className="otherTitle">Other Noteworthy Projects</h1>
    //   <div id="cardContainerRes" className="cardContainer">
    //     <div id="card" className=" hidden show">
    //       <div className="container">
    //         <div className="upperPart">
    //           <a href="https://github.com/Neel2107/PomoTime">
    //             <img className="cardIcon" src="./folder.svg" alt="" />
    //           </a>
    //           <div
    //             style={{
    //               width: "100%",
    //               alignItems: "flex-end",
    //               display: "flex",
    //               flexDirection: "row-reverse",
    //             }}
    //           >
    //             <a
    //               className="link-box"
    //               href="https://github.com/Neel2107/PomoTime"
    //             >
    //               <img className="new-github" src="newGithub.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="cardDetailContainer">
    //           <a
    //             href="https://github.com/Neel2107/PomoTime"
    //             className="projectName"
    //           >
    //             Pomo-Time
    //           </a>
    //           <p className="projectDesc">
    //             Pomo-Time is a web app that helps increase productivity using
    //             the Pomodoro Technique with customizable timers and progress
    //             tracking.
    //           </p>
    //           <div className="techContainer">
    //             <div className="techUsed">ReactJS</div>
    //             <div className="techUsed">CSS</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="card" className="hidden show">
    //       <div className="container">
    //         <div className="upperPart">
    //           <a href="https://github.com/Neel2107/Crypto-Exchange">
    //             <img className="cardIcon" src="./folder.svg" alt="" />
    //           </a>
    //           <div
    //             style={{
    //               width: "100%",
    //               alignItems: "flex-end",
    //               display: "flex",
    //               flexDirection: "row-reverse",
    //             }}
    //           >
    //             <a
    //               className="link-box"
    //               href="https://github.com/Neel2107/Crypto-Exchange"
    //             >
    //               <img className="new-github" src="newGithub.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="cardDetailContainer">
    //           <a
    //             href="https://github.com/Neel2107/Crypto-Exchange"
    //             className="projectName"
    //           >
    //             Crypto-Exchange
    //           </a>
    //           <p className="projectDesc">
    //             Crypto Exchange is a basic, user-friendly platform offering a
    //             straightforward way for users to exchange various
    //             cryptocurrencies.
    //           </p>
    //           <div className="techContainer">
    //             <div className="techUsed">React JS</div>
    //             <div className="techUsed">CSS</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="card" className="hidden show">
    //       <div className="container">
    //         <div className="upperPart">
    //           <a href="https://github.com/Neel2107/NewsMonkey">
    //             <img className="cardIcon" src="./folder.svg" alt="" />
    //           </a>
    //           <div
    //             style={{
    //               width: "100%",
    //               alignItems: "flex-end",
    //               display: "flex",
    //               flexDirection: "row-reverse",
    //             }}
    //           >
    //             <a
    //               className="link-box"
    //               href="https://github.com/Neel2107/NewsMonkey"
    //             >
    //               {/* <img className="linkIcon" src="./link.png" alt="" /> */}
    //               <img className="new-github" src="newGithub.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="cardDetailContainer">
    //           <a
    //             href="https://github.com/Neel2107/NewsMonkey"
    //             className="projectName"
    //           >
    //             NewsMonkey
    //           </a>
    //           <p className="projectDesc">
    //             Experience the latest news from diverse categories on our
    //             React-powered news website, fueled by the reliable NewsAPI.
    //           </p>
    //           <div className="techContainer">
    //             <div className="techUsed">React JS</div>
    //             <div className="techUsed">Bootstrap</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="card" className="hidden show">
    //       <div className="container">
    //         <div className="upperPart">
    //           <a href="https://image-gallery-neel2107.vercel.app/">
    //             <img className="cardIcon" src="./folder.svg" alt="" />
    //           </a>
    //           <div
    //             style={{
    //               width: "100%",
    //               alignItems: "flex-end",
    //               display: "flex",
    //               flexDirection: "row-reverse",
    //             }}
    //           >
    //             <a
    //               className="link-box"
    //               href="https://image-gallery-neel2107.vercel.app/"
    //             >
    //               {/* <img className="linkIcon" src="./link.png" alt="" /> */}
    //               <img className="new-github" src="newGithub.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="cardDetailContainer">
    //           <a
    //             href="https://image-gallery-neel2107.vercel.app/"
    //             className="projectName"
    //           >
    //             Image Gallery
    //           </a>
    //           <p className="projectDesc">
    //             Created an intuitive image gallery website utilizing the
    //             Unsplash API, enabling users to easily search and discover
    //             high-quality images.
    //           </p>
    //           <div className="techContainer">
    //             <div className="techUsed">React JS</div>
    //             <div className="techUsed">Unsplash API</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="card" className="hidden show">
    //       <div className="container">
    //         <div className="upperPart">
    //           <a href="https://github.com/Neel2107/JokeBox.git">
    //             <img className="cardIcon" src="./folder.svg" alt="" />
    //           </a>
    //           <div
    //             style={{
    //               width: "100%",
    //               alignItems: "flex-end",
    //               display: "flex",
    //               flexDirection: "row-reverse",
    //             }}
    //           >
    //             <a
    //               className="link-box"
    //               href="https://github.com/Neel2107/JokeBox.git"
    //             >
    //               {/* <img className="linkIcon" src="./link.png" alt="" /> */}
    //               <img className="new-github" src="newGithub.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="cardDetailContainer">
    //           <a
    //             href="https://github.com/Neel2107/JokeBox.git"
    //             className="projectName"
    //           >
    //             JokeBox
    //           </a>
    //           <p className="projectDesc">
    //             Designed and developed an engaging web app featuring a sleek,
    //             modern interface, delivering a continuous stream of humor with a
    //             single click.
    //           </p>
    //           <div className="techContainer">
    //             <div className="techUsed">React JS</div>
    //             <div className="techUsed">API</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="card" className="hidden show">
    //       <div className="container">
    //         <div className="upperPart">
    //           <a href="https://tirupur-homes.vercel.app/">
    //             <img className="cardIcon" src="./folder.svg" alt="" />
    //           </a>
    //           <div
    //             style={{
    //               width: "100%",
    //               alignItems: "flex-end",
    //               display: "flex",
    //               flexDirection: "row-reverse",
    //             }}
    //           >
    //             <a
    //               className="link-box"
    //               href="https://tirupur-homes.vercel.app/"
    //             >
    //               {/* <img className="linkIcon" src="./link.png" alt="" /> */}
    //               <img className="new-github" src="newGithub.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="cardDetailContainer">
    //           <a
    //             href="https://tirupur-homes.vercel.app/"
    //             className="projectName"
    //           >
    //             Tirupur Homes
    //           </a>
    //           <p className="projectDesc">
    //             Crafted a captivating and responsive landing page using HTML,
    //             CSS, and JavaScript for a client in the real estate industry.
    //           </p>
    //           <div className="techContainer">
    //             <div className="techUsed">HTML</div>
    //             <div className="techUsed">CSS</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>