import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectContainer = () => {
    const projects = [
        {
            title: "Swiggy UI",
            description: "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
            image: "./project/swiggy-clone.png",
            tech: ["React Native", "Nativewind", "Expo", "Reanimated"],
            github: "https://github.com/Neel2107/swiggy-clone",
            isReversed: false
        },
        {
            title: "Quick Bites",
            description: "Quick Bites is a web application built with React.js and Swiggy's API.",
            image: "./project/quickbites.png",
            tech: ["React + Vite", "Tailwind CSS", "Swiggy API"],
            github: "https://github.com/Neel2107/QuickBites",
            live: "https://quick-bites-nova.vercel.app/",
            isReversed: true
        },
        {
            title: "Nike Shoe Store",
            description: "Created and deployed a fully functional shoe store website on Vercel, enabling users to explore and purchase a wide range of products.",
            image: "./project/shoe-store.png",
            tech: ["Next JS", "Node JS", "Tailwind CSS", "Strapi"],
            github: "https://github.com/Neel2107/Shoe-Store",
            live: "https://shoe-store1.vercel.app/",
            isReversed: false
        },
        {
            title: "Admin Dashboard",
            description: "Developed a fully functional React JS admin dashboard application with CRUD functionality and interactive charts using Recharts.",
            image: "./project/admin-dashboard.png",
            tech: ["React", "Node JS", "SCSS", "MUI"],
            github: "https://github.com/Neel2107/Admin-Dashboard",
            live: "https://admin-dashboard-neel2107.vercel.app/",
            isReversed: false
        },
        {
            title: "Hoo bank",
            description: "I built and deployed a fully responsive bank website with modern UI/UX in ReactJS with Tailwind.",
            image: "./project/bank-app.png",
            tech: ["React", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/Neel2107/bank-app",
            live: "https://bank-app-coral.vercel.app/",
            isReversed: true
        }
    ];

    return (
        <div className="min-h-screen py-20 px-4 md:px-16 lg:px-24" id="project">
            <div className="max-w-7xl mx-auto">
                <SectionTitle number="02" title="Featured Projects" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title + index}
                            className="group relative overflow-hidden rounded-xl bg-[#0e1f34]/30 backdrop-blur-sm border border-[#89bbfe]/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Image Container */}
                            <div className="relative h-[300px] md:h-[350px] overflow-hidden bg-[#0a192f]">
                                <div className="absolute inset-0 bg-[#89bbfe]/20 transition-opacity group-hover:opacity-0 z-10 " />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[#89bbfe] text-sm font-mono">Featured Project</span>
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                className="text-[#89bbfe]/70 hover:text-[#89bbfe] transition-colors"
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
                                                className="text-[#89bbfe]/70 hover:text-[#89bbfe] transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                <motion.h3
                                    className="text-[#fed] text-2xl font-bold mb-3 group-hover:text-[#89bbfe] transition-colors"
                                // whileHover={{ x: 10 }}
                                // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono rounded-full bg-[#89bbfe]/10 text-[#89bbfe]/70 hover:text-[#89bbfe] transition-colors border border-[#89bbfe]/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectContainer;