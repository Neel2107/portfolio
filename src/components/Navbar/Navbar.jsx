import { motion } from "framer-motion";
import React, { useCallback } from "react";

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
    <motion.nav
      className="tw-flex tw-justify-between tw-items-center tw-w-full tw-sticky tw-top-0 tw-left-0 tw-backdrop-blur-md tw-bg-[#0d0d10b2]/70 tw-z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="tw-text-white tw-my-2 tw-mx-6 tw-cursor-pointer tw-w-max tw-text-[32px]"
        id="logo"
        onClick={handleLogoClick}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <a href="#top" className="tw-no-underline tw-text-white tw-font-satisfy ">Nova</a>
      </motion.div>

      <div className="tw-m-4 tw-hidden tw-flex-row tw-items-center md:tw-flex ">
        <ul className="tw-m-0 tw-p-0 tw-flex tw-flex-row tw-list-none">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.id}
              className="tw-mx-4"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: index * 0.1
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => handleScroll(item.id)}
                className="tw-text-white tw-no-underline tw-text-sm"
              >
                <span className="tw-text-[#89bbfe]">{item.num}.</span>
                <span className="hover:tw-text-[#89bbfe] tw-transition-colors tw-duration-200">
                  {item.text}
                </span>
              </a>
            </motion.li>
          ))}
          <motion.li
            className="tw-mx-4"
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
              className="tw-text-white tw-no-underline tw-text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tw-text-[#89bbfe]">06.</span>
              <span className="hover:tw-text-[#89bbfe] tw-transition-colors tw-duration-200">
                Resume
              </span>
            </a>
          </motion.li>
        </ul>
      </div>

      <div className=" tw-flex md:tw-hidden">


        <motion.button
          onClick={handleSidbar}
          className="md:tw-block tw-bg-transparent tw-border-0 tw-mr-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 0.8,
            delay: (NAV_ITEMS.length + 1) * 0.1
          }}
        >
          <img
            loading="lazy"
            className="tw-w-[30px] tw-h-[30px] tw-object-cover"
            src="./pyramid.png"
            alt="Menu"
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default React.memo(Navbar);
