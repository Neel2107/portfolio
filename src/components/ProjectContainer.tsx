import SectionTitle from "@/components/SectionTitle";
import Skill from "@/components/common/Skill";
import {
  ANIMATION,
  CONTAINER_STYLES,
  featuredProjects,
} from "@/utils/constants";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const ProjectContainer = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="project"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Featured Projects" />

        <div
          className={`${CONTAINER_STYLES.spacing.contentTop} space-y-8 md:space-y-12 lg:space-y-12`}
        >
          {featuredProjects.map((project, index) => {
            const redirectLink = project.live ?? project.github;

            return (
              <motion.div
                key={project.title + index}
                className="flex flex-col md:flex-row gap-8 items-start"
                {...ANIMATION}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Image Section - Left Side */}
                <div className="w-full md:w-1/2">
                  <motion.a
                    href={redirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-[200px] md:h-56 overflow-hidden bg-background rounded-lg cursor-pointer border border-zinc-100 dark:border-zinc-800"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.a>
                </div>

                {/* Content Section - Right Side */}
                <div className="w-full md:w-1/2 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg  font-semibold text-primary">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
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
                          className="text-primary/70 hover:text-primary"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Skill name={tech.name} href={tech.url} key={techIndex} />
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
