import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectContainer = () => {
    const projects = [
        {
            title: "Swiggy UI",
            description: "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
            image: "./project/swiggy-clone.png",
            tech: ["React Native", "Nativewind", "Expo", "Reanimated"],
            github: "https://github.com/Neel2107/swiggy-clone",
        },
        {
            title: "Quick Bites",
            description: "Quick Bites is a web application built with React.js and Swiggy's API.",
            image: "./project/quickbites.png",
            tech: ["React + Vite", "Tailwind CSS", "Swiggy API"],
            github: "https://github.com/Neel2107/QuickBites",
            live: "https://quick-bites-nova.vercel.app/",
        },
        {
            title: "Nike Shoe Store",
            description: "Created and deployed a fully functional shoe store website on Vercel, enabling users to explore and purchase a wide range of products.",
            image: "./project/shoe-store.png",
            tech: ["Next JS", "Node JS", "Tailwind CSS", "Strapi"],
            github: "https://github.com/Neel2107/Shoe-Store",
            live: "https://shoe-store1.vercel.app/",
        },
    ];

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen w-full px-4 md:px-[15%] z-20 py-32"
            id="project"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col h-full w-full max-w-6xl">
                <SectionTitle number="02" title="Featured Projects" />

                <div className="mt-12 space-y-12">
                   

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title + index}
                                className="bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-[200px] overflow-hidden bg-[#0a192f]">
                       
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
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

                                    <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-mono rounded-full bg-[#89bbfe]/10 text-[#89bbfe]/70 border border-[#89bbfe]/20"
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
        </motion.div>
    );
};

export default ProjectContainer;