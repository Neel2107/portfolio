import { CONTAINER_STYLES } from '@/utils/constants';
import { motion } from 'motion/react';

const MainContainer = () => {
  return (
    <section id='about' className={`${CONTAINER_STYLES.section} flex-col text-left min-h-screen`}>
      <div className={CONTAINER_STYLES.sectionContent}>
        <div className={CONTAINER_STYLES.spacing.elementGap}>
          {/* Greeting */}
          <motion.div
            className="inline-flex items-center"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="mr-2">👋</span>
            <span className="text-base text-gray-300">Hello, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-text leading-tight"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Neel Patel
          </motion.h1>

          {/* Title */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#bae6ff]">
              Software Engineer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            I&apos;m a design-minded, detail-oriented software engineer passionate about
            combining beautiful code with beautiful design to create exceptional
            digital experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;