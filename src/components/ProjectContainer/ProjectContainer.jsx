import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectContainer = () => {
    const projects = [
        {
            title: "Swiggy UI",
            description: "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
            image: "./project/swiggy-ui.png",
            tech: ["React Native", "Nativewind", "Expo", "Reanimated"],
            github: "https://github.com/Neel2107/swiggy-clone",
            isReversed: false
        },
        {
            title: "Quick Bites",
            description: "Quick Bites is a web application built with React.js and Swiggy's API.",
            image: "./Quickbites.png",
            tech: ["React + Vite", "Tailwind CSS", "Swiggy API"],
            github: "https://github.com/Neel2107/QuickBites",
            live: "https://quick-bites-nova.vercel.app/",
            isReversed: true
        },
        {
            title: "Nike Shoe Store",
            description: "Created and deployed a fully functional shoe store website on Vercel, enabling users to explore and purchase a wide range of products.",
            image: "./1.png",
            tech: ["Next JS", "Node JS", "Tailwind CSS", "Strapi"],
            github: "https://github.com/Neel2107/Shoe-Store",
            live: "https://shoe-store1.vercel.app/",
            isReversed: false
        },
        {
            title: "Admin Dashboard",
            description: "Developed a fully functional React JS admin dashboard application with CRUD functionality and interactive charts using Recharts.",
            image: "./4.png",
            tech: ["React", "Node JS", "SCSS", "MUI"],
            github: "https://github.com/Neel2107/Admin-Dashboard",
            live: "https://admin-dashboard-neel2107.vercel.app/",
            isReversed: false
        },
        {
            title: "Hoo bank",
            description: "I built and deployed a fully responsive bank website with modern UI/UX in ReactJS with Tailwind.",
            image: "./2.png",
            tech: ["React", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/Neel2107/bank-app",
            live: "https://bank-app-coral.vercel.app/",
            isReversed: true
        }
    ];

    return (
        <div className="min-h-screen py-20 px-4 md:px-16 lg:px-24" id="project">
            <div className="max-w-7xl mx-auto">
            <SectionTitle number="02" title="Some Things I've Built" />

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`flex flex-col ${project.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                className="w-full md:w-7/12"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-[#89bbfe] opacity-20 rounded-lg transition-opacity group-hover:opacity-0 hidden md:block" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-lg w-full h-auto shadow-xl"
                                    />
                                </div>
                            </motion.div>

                            <div className={`w-full md:w-5/12 ${project.isReversed ? 'text-left' : 'text-right'}`}>
                                <motion.span
                                    className="text-[#89bbfe] text-sm font-mono"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Featured Project
                                </motion.span>

                                <motion.h3
                                    className="text-[#fed] text-2xl md:text-3xl font-bold my-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.div
                                    className="bg-[#112240] p-6 rounded-lg shadow-xl my-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <p className="text-gray-300">{project.description}</p>
                                </motion.div>

                                <motion.div
                                    className={`flex flex-wrap ${project.isReversed ? 'justify-start' : 'justify-end'} gap-4 my-4 text-sm font-mono text-gray-400`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="hover:text-[#89bbfe] transition-colors">{tech}</span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className={`flex gap-4 ${project.isReversed ? 'justify-start' : 'justify-end'}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group"
                                        >
                                            <motion.img
                                                src="./github.png"
                                                alt="GitHub"
                                                className="w-6 h-6"
                                                whileHover={{ scale: 1.1, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group"
                                        >
                                            <motion.img
                                                src="/link.png"
                                                alt="Live Demo"
                                                className="w-6 h-6"
                                                whileHover={{ scale: 1.1, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </a>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectContainer;