import { motion } from 'motion/react';

const MainContainer = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto "
        id='Home'
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center lg:text-left">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-[#89bbfe] mr-2">👋</span>
              <span className="text-sm text-gray-300">Hello, I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-text leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Neel Patel
            </motion.h1>

            {/* Title */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#bae6ff]">
                Software Engineer
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#89bbfe] to-[#bae6ff] mx-auto lg:mx-0 rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I&apos;m a design-minded, detail-oriented software engineer passionate about
              combining beautiful code with beautiful design to create exceptional
              digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#project"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-primary rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#89bbfe]/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#bae6ff] to-[#89bbfe] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>


            </motion.div>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default MainContainer;