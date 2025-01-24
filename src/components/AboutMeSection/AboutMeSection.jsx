import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutMeSection = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen w-full  px-4 md:px-[15%] z-20 md:mt-0 mt-[60%]"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col h-full md:p-0  py-[10%] w-full">
        <SectionTitle number="01" title="About Me" />

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