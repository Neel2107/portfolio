import SectionTitle from "@/components/SectionTitle";
import { ANIMATION, CONTAINER_STYLES } from "@/utils/constants";
import { experience } from "@/utils/constants/experience";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Website from "./common/Website";

const Experience = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="experience"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Experience" />

        <div className={CONTAINER_STYLES.spacing.contentTop}>
          <div className="">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex flex-row justify-between">
                  {/* Left Side */}
                  <div className="flex flex-row  gap-5">
                    <div className="flex items-center justify-center size-16 bg-accent/80 dark:bg-white rounded-lg p-2">
                      <Image
                        src={exp.logo}
                        alt={`${exp.organization} logo`}
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2 items-center">
                        <span className="text-primary font-semibold text-lg">
                          {exp.organization}
                        </span>
                        <Link
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Website className="size-4 text-secondary" />
                        </Link>
                      </div>

                      <h3 className="text-primary text-base font-normal">
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-accent-foreground text-base font-light">
                      {exp.period}
                    </span>
                    <span className="text-accent-foreground text-base  font-light">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full">
                  <motion.div>
                    <ul className="list-disc pl-4 space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <motion.li
                          key={i}
                          className="text-secondary text-base"
                          initial={{ opacity: 0, filter: "blur(4px)" }}
                          whileInView={{ opacity: 1, filter: "blur(0px)" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1 + i * 0.1,
                          }}
                        >
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
