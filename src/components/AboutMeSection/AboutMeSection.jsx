import { motion } from "framer-motion";
import React from "react";

const AboutMeSection = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen w-full px-[17%] py-[5%] z-20 md:mt-0 mt-[60%]"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col h-full md:p-0 px-[10%] py-[10%] w-full">
        <motion.div
          className="flex items-center pb-[30px] w-full md:pb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#fed] md:text-[1.875em] text-base font-semibold tracking-[2px] mr-[10px] flex items-center">
            <span className="text-[#89bbfe] text-[1.438em] mr-[10px]">01.</span>
            About me
          </span>
          <div className="h-[0.5px] w-[30%] bg-[#003b5d]"></div>
        </motion.div>

        <div className="flex md:flex-row flex-col justify-center pt-[30px]">
          <motion.span
            className="md:text-2xl text-lg md:font-semibold font-normal md:text-right text-left md:mr-5 mr-0 md:w-max w-[80%] overflow-hidden text-ellipsis"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-[#89bbfe]">Bonjour </span>
            it's Neel Patel and I enjoy creating things that live on the internet.
          </motion.span>

          <motion.p
            className="md:border-l-[5px] border-l-0 border-[#cacaca] text-silver md:text-lg text-base leading-[30px] md:pl-5 pl-0 w-full md:pt-0 pt-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm a Software Development Engineer specializing in React Native and Next.js development. At Faebikes, I lead the development of high-impact applications handling 60L+ monthly transactions. With a focus on scalable solutions and performance optimization, I've consistently delivered features that enhance user experience and drive business growth.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeSection;