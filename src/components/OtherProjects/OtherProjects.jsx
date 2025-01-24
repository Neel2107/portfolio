import { motion } from "framer-motion";
import { default as React, } from "react";

const OtherProjects = () => {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="tw-flex tw-flex-col tw-mt-[10%] tw-text-center tw-w-full tw-items-center">
      <motion.h1
        className="tw-text-[1.875em] tw-mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Other Noteworthy Projects
      </motion.h1>

      <motion.div
        className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-w-[90%] lg:tw-w-[60%] tw-mt-[6%]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="tw-h-[300px] tw-backdrop-blur-xl tw-bg-[rgba(17,25,40,0.75)] tw-rounded-xl tw-border tw-border-white/[0.125] tw-p-4 tw-transition-all tw-duration-500 hover:-tw-translate-y-2 hover:tw-shadow-[0_12px_30px_0_rgba(74,150,194,0.23)]"
          >
            <div className="tw-flex tw-flex-col tw-h-full">
              <div className="tw-flex tw-justify-between tw-items-center">
                <a href={project.link}>
                  <img
                    loading="lazy"
                    className="tw-w-[34px] tw-h-auto"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <a
                  href={project.link}
                  className="tw-group"
                >
                  <motion.img
                    loading="lazy"
                    className="tw-w-6 tw-h-6 tw-invert tw-transition-all group-hover:tw-drop-shadow-[0_0_10px_#FFD700]"
                    src="newGithub.png"
                    alt="GitHub"
                    whileHover={{ scale: 1.1 }}
                  />
                </a>
              </div>

              <div className="tw-flex tw-flex-col tw-h-full tw-pt-4">
                <a
                  href={project.link}
                  className="tw-text-white tw-text-xl tw-font-semibold tw-tracking-wide tw-my-2.5 tw-no-underline hover:tw-text-[#89bbfe] tw-transition-colors tw-text-start"
                >
                  {project.title}
                </a>
                <p className="tw-text-white/[0.545] tw-text-base tw-font-medium tw-min-h-[120px] tw-overflow-y-auto tw-text-left">
                  {project.description}
                </p>
                <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="tw-text-white/[0.345] tw-text-sm tw-font-medium tw-p-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OtherProjects;

