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
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-w-full tw-py-[5%] tw-px-[17%] md:tw-px-[17%] " id="skills">
      <div className="tw-w-full">
        <motion.div
          className="tw-flex tw-items-center tw-pb-[30px] tw-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="tw-text-[#fed] md:tw-text-[1.875em] tw-text-base tw-font-semibold tw-tracking-[2px] tw-mr-[10px] tw-flex tw-items-center">
            <span className="tw-text-[#89bbfe] md:tw-text-[1.438em] tw-text-lg tw-mr-[10px]">03.</span>
            Technologies I've worked with
          </h2>
          <div className="tw-h-[1px] tw-bg-[#003b5d] tw-w-[30%]" />
        </motion.div>

        <motion.div
          className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-items-center tw-justify-center"
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
                className="tw-flex tw-flex-col tw-gap-4 tw-justify-between tw-items-center tw-h-[120px] tw-p-4 tw-transition-all tw-duration-500"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  loading="lazy"
                  src={item.icon}
                  height={75}
                  width={75}
                  alt={`${item.name} icon`}
                  className="tw-aspect-square"
                  {...(isReactLogo && {
                    whileHover: {
                      rotate: 1080,
                      transition: { duration: 1, ease: "easeInOut" }
                    }
                  })}
                />
                <p className="tw-text-gray-300 tw-text-sm md:tw-text-base">
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