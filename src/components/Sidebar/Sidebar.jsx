import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "About", location: "#about", number: "01" },
    { name: "Projects", location: "#project", number: "02" },
    { name: "Skills", location: "#skills", number: "03" },
    { name: "Experience", location: "#education", number: "04" },
    { name: "Contact", location: "#contact", number: "05" },
    {
      name: "Resume",
      location: "https://drive.google.com/file/d/1QzKjHsrlKisq8ITQ1Umgg9s0MjxY2Q1y/view?usp=sharin",
      number: "06",
      isExternal: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <motion.div
        className="absolute right-0 h-full w-[75%] max-w-[400px] bg-[#0d1117] shadow-xl"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="relative h-full p-6 flex flex-col">
          {/* Close Button */}
          <motion.button
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6 text-[#89bbfe]" />
          </motion.button>

          {/* Navigation Links */}
          <motion.nav
            className="mt-16 flex flex-col space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.location}
                className="group flex items-center space-x-4 text-lg"
                variants={itemVariants}
                onClick={() => !item.isExternal && setIsOpen(false)}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                whileHover={{ x: 10 }}
              >
                <span className="text-[#89bbfe] opacity-60 text-sm font-mono">
                  {item.number}.
                </span>
                <span className="text-gray-300 group-hover:text-[#89bbfe] transition-colors">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Footer */}
          <motion.div
            className="mt-auto text-center text-sm text-gray-400"
            variants={itemVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            <p>Made with ❤️ by Nova</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;