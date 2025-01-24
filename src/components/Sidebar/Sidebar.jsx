import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      className="hidden md:hidden sm:block fixed bottom-0 w-full bg-[#02020277] flex-row-reverse h-screen z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="fixed bottom-0 w-full backdrop-blur-sm bg-[#13131ad1] rounded-t-[20px] flex flex-col px-5 pt-8 pb-5"
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
      >
        <motion.button
          className="bg-transparent border-0 absolute right-6 top-3 w-max z-10"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="text-white w-6 h-6" />
        </motion.button>

        <nav className="flex flex-col gap-6 items-center mt-4">
          <motion.a
            href="#about"
            className="text-white no-underline hover:text-[#89bbfe] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a
            href="#skills"
            className="text-white no-underline hover:text-[#89bbfe] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#project"
            className="text-white no-underline hover:text-[#89bbfe] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#education"
            className="text-white no-underline hover:text-[#89bbfe] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.a>
          <motion.a
            href="#contact"
            className="text-white no-underline hover:text-[#89bbfe] transition-colors"
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