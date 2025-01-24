import { motion } from "framer-motion";
import React from "react";
import { skillsCardsData } from "../../../public/skillsLogos/skillsCardsData";

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
    <div className="flex items-center justify-center min-h-screen w-full py-[5%]  px-4 md:px-[17%]  " id="skills">
      <div className="w-full">
        <motion.div
          className="flex items-center pb-[30px] w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#fed] md:text-[1.875em] text-base font-semibold tracking-[2px] mr-[10px] flex items-center">
            <span className="text-[#89bbfe] md:text-[1.438em] text-lg mr-[10px]">03.</span>
            My Stack
          </h2>
          <div className="h-[1px] bg-[#003b5d] w-[30%]" />
        </motion.div>

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