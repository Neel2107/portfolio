import { motion } from 'framer-motion';
import React from 'react';

const MainContainer = () => {
  return (
    <div className='flex items-center w-full px-4 md:px-[15%] py-[10%] my-0 z-100 md:flex-row flex-col md:justify-between justify-center' id='Home'>
      <motion.div
        className='flex flex-col w-full z-10 md:mt-0 mt-[50%]'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.span
          className='text-[#89bbfe] text-base tracking-[2px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <span className='md:text-[20px] text-base'>Hello, </span>
          My name is
        </motion.span>

        <motion.span
          className='text-white text-[2.75rem] md:text-[70px] font-semibold tracking-[2px] my-[10px] md:my-[15px] w-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Neel Patel
        </motion.span>

        <motion.span
          className='text-[#bae6ff] text-[1.35rem] md:text-[54px] tracking-wider font-semibold'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          I'm a Software Engineer
        </motion.span>

        <motion.p
          className='text-gray-400 text-base md:text-lg leading-[25px] mt-[30px] max-w-[550px] text-left'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.
        </motion.p>

        <motion.a
          href="#project"
          className='bg-transparent border border-[#89bbfe] rounded-lg text-[#89bbfe] cursor-pointer flex flex-row justify-around mt-[30px] md:mt-[50px] px-3 md:px-[30px] py-3 md:py-[15px] text-xs md:text-lg w-max hover:bg-[#89bbfe]/10 hover:text-white transition-all duration-300'
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
        className='z-10 md:block hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <img
          loading='lazy'
          className='w-[27rem] h-[27rem] object-cover cursor-none'
          src="./education.gif"
          alt="Education illustration"
        />
      </motion.div>
    </div>
  );
};

export default MainContainer;