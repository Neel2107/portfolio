import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/ui/badge";
import { ANIMATION, CONTAINER_STYLES } from "@/utils/constants";
import { skillsCardsData } from "@/utils/skillsCardsData";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";

const SkillsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div className={CONTAINER_STYLES.section} id="skills" {...ANIMATION}>
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle number="03" title="My Stack" />

        <div className={CONTAINER_STYLES.spacing.contentTop}>
          <motion.div
            className="flex flex-wrap gap-4"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillsCardsData.map((skill, index) => {
              const isReactLogo =
                skill.name === "React" || skill.name === "React Native";
              return (
                <motion.div
                  key={index}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={() => handleClick(skill.url)}
                >
                  <Badge
                    icon={
                      <motion.img
                        loading="lazy"
                        src={skill.icon}
                        height={20}
                        width={20}
                        alt={`${skill.name} icon`}
                        className="aspect-square"
                        animate={{
                          rotate:
                            hoveredCard === index && isReactLogo ? 360 : 0,
                        }}
                        transition={
                          isReactLogo ? { duration: 1, ease: easeInOut } : {}
                        }
                      />
                    }
                    text={skill.name}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
