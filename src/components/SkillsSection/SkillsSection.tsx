import { motion } from "framer-motion";
import { ANIMATION, CONTAINER_STYLES, COLORS } from "../../utils/constants";
import { skillsCardsData } from "../../utils/skillsCardsData";
import SectionTitle from "../SectionTitle/SectionTitle";

const SkillsSection = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="skills"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.wrapper}>
        <SectionTitle number="03" title="My Stack" />
        
        <div className="mt-12">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillsCardsData.map((skill, index) => {
              const isReactLogo = skill.name === "React" || skill.name === "React Native";

              return (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-6 flex flex-col items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    loading="lazy"
                    src={skill.icon}
                    height={75}
                    width={75}
                    alt={`${skill.name} icon`}
                    className="aspect-square"
                    {...(isReactLogo && {
                      whileHover: {
                        rotate: 360,
                        transition: { duration: 1, ease: "easeInOut" }
                      }
                    })}
                  />
                  <p className="text-gray-300 font-medium">
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