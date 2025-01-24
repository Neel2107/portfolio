import { motion } from "framer-motion";
import React from "react";
import { skillsCardsData } from "../../../public/skillsLogos/skillsCardsData";
import SectionTitle from "../SectionTitle/SectionTitle";

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full py-32 px-4 md:px-[17%]" id="skills">
      <div className="w-full">
        <SectionTitle number="03" title="My Stack" />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillsCardsData.map((item, index) => {
            const isReactLogo = item.name === "React" || item.name === "React Native";

            return (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col gap-4 justify-between items-center h-[120px] p-4 transition-all duration-500"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  loading="lazy"
                  src={item.icon}
                  height={75}
                  width={75}
                  alt={`${item.name} icon`}
                  className="aspect-square"
                  {...(isReactLogo && {
                    whileHover: {
                      rotate: 1080,
                      transition: { duration: 1, ease: "easeInOut" }
                    }
                  })}
                />
                <p className="text-gray-300 text-sm md:text-base">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;