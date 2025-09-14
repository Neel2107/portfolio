import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { ANIMATION, CONTAINER_STYLES } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectContainer = () => {
    const featuredProjects = [
        {
            title: "Swiggy UI",
            description: "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
            image: "/project/swiggy-clone.png",
            tech: ["React Native", "Nativewind", "Expo", "Reanimated"],
            github: "https://github.com/Neel2107/swiggy-clone",
        },
        {
            title: "Quick Bites",
            description: "Quick Bites is a web application built with React.js and Swiggy's API.",
            image: "/project/quickbites.png",
            tech: ["React + Vite", "Tailwind CSS", "Swiggy API"],
            github: "https://github.com/Neel2107/QuickBites",
            live: "https://quick-bites-nova.vercel.app/",
        },
        {
            title: "Nike Shoe Store",
            description: "Created and deployed a fully functional shoe store website on Vercel, enabling users to explore and purchase a wide range of products.",
            image: "/project/shoe-store.png",
            tech: ["Next JS", "Node JS", "Tailwind CSS", "Strapi"],
            github: "https://github.com/Neel2107/Shoe-Store",
            live: "https://shoe-store1.vercel.app/",
        },
    ];

    const otherProjects = [
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
            id="project"
            {...ANIMATION}
        >
            <div className={CONTAINER_STYLES.wrapper}>
                <SectionTitle number="02" title="Featured Projects" />

                <div className="mt-12 space-y-12">
                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        {...ANIMATION}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.title + index}
                                className={CONTAINER_STYLES.card}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-[200px] overflow-hidden bg-[#0a192f]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="pt-4 md:p-6 md:px-0 md:pb-0 space-y-4">
                                    <div className="flex items-center justify-between  md:px-0">
                                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="text-[#89bbfe]/70 hover:text-[#89bbfe]"
                                                >
                                                    <Github size={20} />
                                                </motion.a>
                                            )}
                                            {project.live && (
                                                <motion.a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="text-[#89bbfe]/70 hover:text-[#89bbfe]"
                                                >
                                                    <ExternalLink size={20} />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs bg-[#89bbfe]/10 text-[#89bbfe] px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Other Projects Section */}
                <div className="mt-32">
                    <div className="mt-12">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            {...ANIMATION}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className={CONTAINER_STYLES.card}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <Image src={project.image} alt="Folder icon" width={40} height={40} />
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                className="text-[#89bbfe]/70 hover:text-[#89bbfe]"
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                        <p className="text-gray-400 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs bg-[#89bbfe]/10 text-[#89bbfe] px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectContainer;