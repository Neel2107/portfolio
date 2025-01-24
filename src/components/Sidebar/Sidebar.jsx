import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div 
      className="tw-hidden md:tw-hidden sm:tw-block tw-fixed tw-bottom-0 tw-w-full tw-bg-[#02020277] tw-flex-row-reverse tw-h-screen tw-z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="tw-fixed tw-bottom-0 tw-w-full tw-backdrop-blur-sm tw-bg-[#13131ad1] tw-rounded-t-[20px] tw-flex tw-flex-col tw-px-5 tw-pt-8 tw-pb-5"
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
      >
        <motion.button
          className="tw-bg-transparent tw-border-0 tw-absolute tw-right-6 tw-top-3 tw-w-max tw-z-10"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="tw-text-white tw-w-6 tw-h-6" />
        </motion.button>

        <nav className="tw-flex tw-flex-col tw-gap-6 tw-items-center tw-mt-4">
          <motion.a 
            href="#about"
            className="tw-text-white tw-no-underline hover:tw-text-[#89bbfe] tw-transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#skills"
            className="tw-text-white tw-no-underline hover:tw-text-[#89bbfe] tw-transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#project"
            className="tw-text-white tw-no-underline hover:tw-text-[#89bbfe] tw-transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#education"
            className="tw-text-white tw-no-underline hover:tw-text-[#89bbfe] tw-transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.a>
          <motion.a 
            href="#contact"
            className="tw-text-white tw-no-underline hover:tw-text-[#89bbfe] tw-transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;