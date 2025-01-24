import { motion } from 'framer-motion';
import React from 'react';

const MainContainer = () => {
  return (
    <div className='tw-flex tw-items-center tw-w-full tw-px-[15%] tw-py-[10%] tw-my-0 tw-z-100 md:tw-flex-row tw-flex-col md:tw-justify-between tw-justify-center' id='Home'>
      <motion.div
        className='tw-flex tw-flex-col tw-w-full tw-z-10 md:tw-mt-0 tw-mt-[50%]'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.span
          className='tw-text-[#89bbfe] tw-text-base tw-tracking-[2px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <span className='md:tw-text-[20px] tw-text-base'>Hello, </span>
          My name is
        </motion.span>

        <motion.span
          className='tw-text-[#fed] tw-text-[2.75rem] md:tw-text-[70px] tw-font-semibold tw-tracking-[2px] tw-my-[10px] md:tw-my-[15px] tw-w-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Neel Patel
        </motion.span>

        <motion.span
          className='tw-text-[#bae6ff] tw-text-[1.35rem] md:tw-text-[54px] tw-tracking-wider tw-font-semibold'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          I'm a Software Engineer
        </motion.span>

        <motion.p
          className='tw-text-gray-500 tw-text-base md:tw-text-lg tw-leading-[25px] tw-mt-[30px] tw-max-w-[550px] tw-text-left'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.
        </motion.p>

        <motion.a
          href="#project"
          className='tw-bg-transparent tw-border tw-border-[#89bbfe] tw-rounded-lg tw-text-[#89bbfe] tw-cursor-pointer tw-flex tw-flex-row tw-justify-around tw-mt-[30px] md:tw-mt-[50px] tw-px-3 md:tw-px-[30px] tw-py-3 md:tw-py-[15px] tw-text-xs md:tw-text-lg tw-w-max hover:tw-bg-[#89bbfe]/10 hover:tw-text-white tw-transition-all tw-duration-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Look at my work!
        </motion.a>
      </motion.div>

      <motion.div
        className='tw-z-10 md:tw-block tw-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <img
          loading='lazy'
          className='tw-w-[27rem] tw-h-[27rem] tw-object-cover tw-cursor-none'
          src="./education.gif"
          alt="Education illustration"
        />
      </motion.div>
    </div>
  );
};

export default MainContainer;