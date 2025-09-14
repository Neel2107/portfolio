import { motion } from "motion/react";
import { ANIMATION, CONTAINER_STYLES } from "../../utils/constants";
import { skillsCardsData } from "../../utils/skillsCardsData";
import SectionTitle from "../SectionTitle/SectionTitle";

const SkillsSection = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="skills"
      {...ANIMATION}
    >
      <div >
        <SectionTitle number="03" title="My Stack" />

        <div className="">
          <motion.div
            className="flex flex-wrap gap-4"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillsCardsData.map((skill, index) => {
              const isReactLogo = skill.name === "React" || skill.name === "React Native";

              const handleClick = () => {
                window.open(skill.url, '_blank', 'noopener,noreferrer');
              };

              return (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-3 flex items-center gap-3 w-fit cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={handleClick}
                >
                  <motion.img
                    loading="lazy"
                    src={skill.icon}
                    height={20}
                    width={20}
                    alt={`${skill.name} icon`}
                    className="aspect-square"
                    {...(isReactLogo && {
                      whileHover: {
                        rotate: 360,
                        transition: { duration: 1, ease: "easeInOut" }
                      }
                    })}
                  />
                  <p className="text-gray-300 font-medium text-sm whitespace-nowrap">
                    {skill.name}
                  </p>
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