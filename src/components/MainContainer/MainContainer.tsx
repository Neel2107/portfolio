import { motion } from 'motion/react';
import { ANIMATION, CONTAINER_STYLES } from "../../utils/constants";

const MainContainer = () => {
  return (
    <div className="flex">
      <motion.div
        className={CONTAINER_STYLES.section}
        id='Home'
        {...ANIMATION}
        animate={{ opacity: 1, filter: "blur(0px)" }}
      >
        <div className={CONTAINER_STYLES.wrapper}>
          <motion.div
            className='flex flex-col w-full z-10 '
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className='text-[#89bbfe] text-base tracking-[2px]'
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, My name is
            </motion.span>

            <motion.span
              className='text-white text-xl md:text-2xl font-semibold tracking-[2px] w-full'
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Neel Patel
            </motion.span>

            <motion.span
              className='text-[#bae6ff] text-3xl tracking-wider font-semibold'
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I&apos;m a Software Engineer
            </motion.span>

            <motion.p
              className='text-gray-400 text-base md:text-base leading-[25px] max-w-[550px] text-left'
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I&apos;m a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.
            </motion.p>

            <motion.a
              href="#project"
              className='bg-transparent border border-gray-500 rounded-2xl text-[#89bbfe] cursor-pointer text-xs md:text-lg w-max hover:bg-[#89bbfe]/10 hover:text-white transition-all duration-300'
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Look at my work!
            </motion.a>
          </motion.div>


        </div>
      </motion.div>
    </div>
  );
};

export default MainContainer;