import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ANIMATION, CONTAINER_STYLES, COLORS } from "../../utils/constants";

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


  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="other-projects"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.wrapper}>
        <SectionTitle number="04" title="Other Projects" />

        <div className="mt-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className={CONTAINER_STYLES.card}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <img
                      loading="lazy"
                      className="w-[34px] h-auto text-[#89bbfe]"
                      src={project.image}
                      alt={project.title}
                    />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#89bbfe]/70 hover:text-[#89bbfe] transition-colors"
                    >
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Github size={20} />
                      </motion.div>
                    </a>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl font-semibold mb-3 hover:text-[#89bbfe] transition-colors"
                    >
                      {project.title}
                    </a>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-[#89bbfe]/10 text-[#89bbfe]/70 border border-[#89bbfe]/20"
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
      </div>
    </motion.div>
  );
};

export default OtherProjects;

