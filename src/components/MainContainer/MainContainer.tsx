import { motion } from 'framer-motion';
import { ANIMATION, CONTAINER_STYLES, COLORS } from "../../utils/constants";

const MainContainer = () => {
  return (
    <div className="flex">

   
    <motion.div 
      className={CONTAINER_STYLES.section}
      id='Home'
      {...ANIMATION}
      animate={{ opacity: 1, filter: "blur(0px)" }} // Override whileInView with animate
    >
      <div className={CONTAINER_STYLES.wrapper}>
        <motion.div
          className='flex flex-col w-full z-10 md:mt-0 mt-[20%]'
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
            <span className=' '>Hello, </span>
            My name is
          </motion.span>

          <motion.span
            className='text-white text-[2.75rem] md:text-[70px] font-semibold tracking-[2px] my-[10px] md:my-[15px] w-full'
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Neel Patel
          </motion.span>

          <motion.span
            className='text-[#bae6ff] text-[1.35rem] md:text-[54px] tracking-wider font-semibold'
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a Software Engineer
          </motion.span>

          <motion.p
            className='text-gray-400 text-base md:text-lg leading-[25px] mt-[30px] max-w-[550px] text-left'
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.
          </motion.p>

          <motion.a
            href="#project"
            className='bg-transparent border border-[#89bbfe] rounded-lg text-[#89bbfe] cursor-pointer flex flex-row justify-around mt-[30px] md:mt-[50px] px-3 md:px-[30px] py-3 md:py-[15px] text-xs md:text-lg w-max hover:bg-[#89bbfe]/10 hover:text-white transition-all duration-300'
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