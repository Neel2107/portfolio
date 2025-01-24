import { motion } from "framer-motion";
import React from "react";

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
        <div className="tw-min-h-screen tw-py-20 tw-px-4 md:tw-px-16 lg:tw-px-24" id="project">
            <div className="tw-max-w-7xl tw-mx-auto">
                <motion.div
                    className="tw-flex tw-items-center tw-gap-4 tw-mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="tw-text-[#fed] tw-text-2xl md:tw-text-3xl tw-font-bold tw-whitespace-nowrap">
                        <span className="tw-text-[#89bbfe]">02.</span> Some things I've Built
                    </h2>
                    <div className="tw-h-[1px] tw-bg-[#003b5d] tw-flex-grow" />
                </motion.div>

                <div className="tw-space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`tw-flex tw-flex-col ${project.isReversed ? 'md:tw-flex-row-reverse' : 'md:tw-flex-row'} tw-items-center tw-gap-8`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                className="tw-w-full md:tw-w-7/12"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="tw-relative tw-group">
                                    <div className="tw-absolute tw-inset-0 tw-bg-[#89bbfe] tw-opacity-20 tw-rounded-lg tw-transition-opacity group-hover:tw-opacity-0" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="tw-rounded-lg tw-w-full tw-h-auto tw-shadow-xl"
                                    />
                                </div>
                            </motion.div>

                            <div className={`tw-w-full md:tw-w-5/12 ${project.isReversed ? 'tw-text-left' : 'tw-text-right'}`}>
                                <motion.span
                                    className="tw-text-[#89bbfe] tw-text-sm tw-font-mono"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Featured Project
                                </motion.span>

                                <motion.h3
                                    className="tw-text-[#fed] tw-text-2xl md:tw-text-3xl tw-font-bold tw-my-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.div
                                    className="tw-bg-[#112240] tw-p-6 tw-rounded-lg tw-shadow-xl tw-my-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <p className="tw-text-gray-300">{project.description}</p>
                                </motion.div>

                                <motion.div
                                    className={`tw-flex tw-flex-wrap ${project.isReversed ? 'tw-justify-start' : 'tw-justify-end'} tw-gap-4 tw-my-4 tw-text-sm tw-font-mono tw-text-gray-400`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="hover:tw-text-[#89bbfe] tw-transition-colors">{tech}</span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className={`tw-flex tw-gap-4 ${project.isReversed ? 'tw-justify-start' : 'tw-justify-end'}`}
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
                                            className="tw-group"
                                        >
                                            <motion.img
                                                src="./github.png"
                                                alt="GitHub"
                                                className="tw-w-6 tw-h-6"
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
                                            className="tw-group"
                                        >
                                            <motion.img
                                                src="/link.png"
                                                alt="Live Demo"
                                                className="tw-w-6 tw-h-6"
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