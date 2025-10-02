import SectionTitle from "@/components/SectionTitle";
import Skill from "@/components/common/Skill";
import { ANIMATION, CONTAINER_STYLES } from "@/utils/constants";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const ProjectContainer = () => {
  const featuredProjects = [
    {
      title: "Swiggy UI",
      description:
        "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
      image: "/project/swiggy-clone.png",
      tech: ["React Native", "Nativewind", "Expo", "Reanimated"],
      github: "https://github.com/Neel2107/swiggy-clone",
    },
    {
      title: "Quick Bites",
      description:
        "Quick Bites is a web application built with React.js and Swiggy's API.",
      image: "/project/quickbites.png",
      tech: ["React + Vite", "Tailwind CSS", "Swiggy API"],
      github: "https://github.com/Neel2107/QuickBites",
      live: "https://quick-bites-nova.vercel.app/",
    },
    {
      title: "Nike Shoe Store",
      description:
        "Created and deployed a fully functional shoe store website on Vercel, enabling users to explore and purchase a wide range of products.",
      image: "/project/shoe-store.png",
      tech: ["Next JS", "Node JS", "Tailwind CSS", "Strapi"],
      github: "https://github.com/Neel2107/Shoe-Store",
      live: "https://shoe-store1.vercel.app/",
    },
  ];

  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="project"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle number="02" title="Featured Projects" />

        <div
          className={`${CONTAINER_STYLES.spacing.contentTop} ${CONTAINER_STYLES.spacing.elementGapLarge}`}
        >
          {featuredProjects.map((project, index) => {
            const redirectLink = project.live ?? project.github;

            return (
              <motion.div
                key={project.title + index}
                className="flex flex-col md:flex-row gap-8 items-center"
                {...ANIMATION}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Image Section - Left Side */}
                <div className="w-full md:w-1/2">
                  {redirectLink ? (
                    <motion.a
                      href={redirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block h-[300px] md:h-56 overflow-hidden bg-background rounded-lg cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.a>
                  ) : (
                    <motion.div
                      className="relative h-[300px] md:h-56 overflow-hidden bg-background rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Content Section - Right Side */}
                <div className="w-full md:w-1/2 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg  font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-primary/70 hover:text-primary"
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
                          className="text-primary/70 hover:text-primary"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Skill name={tech} href="#" key={techIndex} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
