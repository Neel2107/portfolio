import { motion } from "framer-motion";
import React from "react";

const AboutMeSection = () => {
  return (
    <motion.div
      className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-w-full tw-px-[17%] tw-py-[5%] tw-z-20 md:tw-mt-0 tw-mt-[60%]"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="tw-flex tw-flex-col tw-h-full md:tw-p-0 tw-px-[10%] tw-py-[10%] tw-w-full">
        <motion.div
          className="tw-flex tw-items-center tw-pb-[30px] tw-w-full md:tw-pb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="tw-text-[#fed] md:tw-text-[1.875em] tw-text-base tw-font-semibold tw-tracking-[2px] tw-mr-[10px] tw-flex tw-items-center">
            <span className="tw-text-[#89bbfe] tw-text-[1.438em] tw-mr-[10px]">01.</span>
            About me
          </span>
          <div className="tw-h-[0.5px] tw-w-[30%] tw-bg-[#003b5d]"></div>
        </motion.div>

        <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-center tw-pt-[30px]">
          <motion.span
            className="md:tw-text-2xl tw-text-lg md:tw-font-semibold tw-font-normal md:tw-text-right tw-text-left md:tw-mr-5 tw-mr-0 md:tw-w-max tw-w-[80%] tw-overflow-hidden tw-text-ellipsis"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="tw-text-[#89bbfe]">Bonjour </span>
            it's Neel Patel and I enjoy creating things that live on the internet.
          </motion.span>

          <motion.p
            className="md:tw-border-l-[5px] tw-border-l-0 tw-border-[#cacaca] tw-text-silver md:tw-text-lg tw-text-base tw-leading-[30px] md:tw-pl-5 tw-pl-0 tw-w-full md:tw-pt-0 tw-pt-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a web developer who aims to find an exciting, challenging entry-level position in the industry alongside a company that will continuously motivate and drive me to do my best and improve my skills and abilities in order to be able to assist the company in achieving its missions and goals.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeSection;