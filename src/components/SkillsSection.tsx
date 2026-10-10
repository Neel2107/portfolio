import SectionTitle from "@/components/SectionTitle";
import Skill from "@/components/common/Skill";
import { cn } from "@/lib/utils";
import {
  CONTAINER_STYLES,
  REVEAL,
  REVEAL_CHILD,
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
      {...REVEAL}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Skills" />

        <div className={cn(CONTAINER_STYLES.spacing.contentTop, "space-y-6")}>
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-4"
              variants={REVEAL_CHILD}
            >
              <h3 className="pt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>

              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
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
                  </li>
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
