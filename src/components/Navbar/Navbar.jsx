import { motion } from "framer-motion";
import { Menu } from "lucide-react";
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
      className="flex justify-between items-center w-full sticky top-0 left-0  bg-[#0d0d10b2]/70 z-[1000] backdrop-blur-[200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-white my-2 mx-6 cursor-pointer w-max text-[32px]"
        id="logo"
        onClick={handleLogoClick}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <a href="#top" className="no-underline text-white font-satisfy ">Nova</a>
      </motion.div>

      <div className="m-4 hidden flex-row items-center md:flex ">
        <ul className="m-0 p-0 flex flex-row list-none">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.id}
              className="mx-4"
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
                className="text-white no-underline text-sm"
              >
                <span className="text-[#89bbfe]">{item.num}.</span>
                <span className="hover:text-[#89bbfe] transition-colors duration-200">
                  {item.text}
                </span>
              </a>
            </motion.li>
          ))}
          <motion.li
            className="mx-4"
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
              className="text-white no-underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#89bbfe]">06.</span>
              <span className="hover:text-[#89bbfe] transition-colors duration-200">
                Resume
              </span>
            </a>
          </motion.li>
        </ul>
      </div>

      <div className=" flex md:hidden">


        <motion.button
          onClick={handleSidbar}
          className="md:block bg-transparent border-0 mr-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 0.8,
            delay: (NAV_ITEMS.length + 1) * 0.1
          }}
        >
          <Menu
            className="w-[30px] h-[30px]"
            aria-label="Menu button"
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default React.memo(Navbar);
