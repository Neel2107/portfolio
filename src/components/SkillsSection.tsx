import SectionTitle from "@/components/SectionTitle";
import Skill from "@/components/common/Skill";
import { cn } from "@/lib/utils";
import {
  ANIMATION,
  CONTAINER_STYLES,
  skillGroups,
  type SkillCard,
} from "@/utils/constants";
import { motion, useReducedMotion } from "motion/react";

const SPINNING_ICONS = new Set(["React", "React Native"]);
// Near-black marks with no dark variant on svgl; inverted on the dark theme.
const INVERT_IN_DARK = new Set(["Expo"]);

/* eslint-disable @next/next/no-img-element -- static SVGs, no optimisation needed */
const SkillIcon = ({
  skill,
  className,
}: {
  skill: SkillCard;
  className?: string;
}) => {
  const shared = {
    loading: "lazy" as const,
    width: 16,
    height: 16,
    "aria-hidden": true,
  };

  if (!skill.iconDark) {
    return <img src={skill.icon} alt="" className={cn("size-4", className)} {...shared} />;
  }

  return (
    <>
      <img src={skill.icon} alt="" className={cn("size-4 dark:hidden", className)} {...shared} />
      <img
        src={skill.iconDark}
        alt=""
        className={cn("hidden size-4 dark:block", className)}
        {...shared}
      />
    </>
  );
};
/* eslint-enable @next/next/no-img-element */

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={CONTAINER_STYLES.section}
      id="skills"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Skills" />

        <div className={cn(CONTAINER_STYLES.spacing.contentTop, "space-y-6")}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: 0.1 + groupIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="pt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>

              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + groupIndex * 0.08 + skillIndex * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Skill name={skill.name} href={skill.url}>
                      <SkillIcon
                        skill={skill}
                        className={cn(
                          INVERT_IN_DARK.has(skill.name) && "dark:invert",
                          SPINNING_ICONS.has(skill.name) &&
                            !reduceMotion &&
                            "transition-transform duration-700 ease-out group-hover:rotate-[360deg]",
                        )}
                      />
                    </Skill>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
