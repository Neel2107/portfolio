import { motion } from "framer-motion";
import React, { useCallback } from "react";
import "./Navbar.scss";

const NAV_ITEMS = [
  { id: "about", num: "01", text: "About" },
  { id: "project", num: "02", text: "Projects" },
  { id: "skills", num: "03", text: "Skills" },
  { id: "education", num: "04", text: "Experience" },
  { id: "contact", num: "05", text: "Contact" },
];

const Navbar = ({ handleSidbar }) => {
  const handleScroll = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="leftLogo"
        id="logo"
        onClick={handleLogoClick}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <a href="#top" className="leftLogo">Nova</a>
      </motion.div>

      <div className="rightNav">
        <ul>
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.id}
              className="nav-item"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: index * 0.1
              }}
            >
              <a href={`#${item.id}`} onClick={() => handleScroll(item.id)}>
                <span className="nums">{item.num}.</span>
                <span className={item.id}>{item.text}</span>
              </a>
            </motion.li>
          ))}
          <motion.li
            className="nav-item"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: NAV_ITEMS.length * 0.1
            }}
          >
            <a
              href="https://drive.google.com/drive/folders/1DQ4kkRG_uoiwEjbzq-Um6JYE4UI7zu6X?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nums">06.</span>
              <span className="resume">Resume</span>
            </a>
          </motion.li>
        </ul>
      </div>

      <motion.button
        onClick={handleSidbar}
        className="toggleBtn"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: (NAV_ITEMS.length + 1) * 0.1
        }}
      >
        <img loading="lazy" className="pyramid" src="./pyramid.png" alt="" />
      </motion.button>
    </motion.div>
  );
};

export default React.memo(Navbar);
