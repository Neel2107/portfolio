import { Github } from "lucide-react";
import { CONTAINER_STYLES } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";

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
    <div
      className={CONTAINER_STYLES.section}
      id="other-projects"
    >
      <div className={CONTAINER_STYLES.wrapper}>
        <SectionTitle number="04" title="Other Projects" />

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-6 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <img
                    src={project.image}
                    alt="Folder icon"
                    className="w-12 h-12 text-[#89bbfe]"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#89bbfe] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-[#89bbfe] bg-[#89bbfe]/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;

