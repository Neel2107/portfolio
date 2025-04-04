import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import React, { useCallback } from "react";

const NAV_ITEMS = [
  { id: "about",  text: "About" },
  { id: "project",  text: "Projects" },
  { id: "skills",  text: "Skills" },
  { id: "experience",  text: "Experience" },
  { id: "contact",  text: "Contact" },
];

interface NavbarProps {
  handleSidbar: () => void;
}

const Navbar = ({ handleSidbar }: NavbarProps) => {
  const handleScroll = useCallback((id: string) => {
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
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        <a href="#top" className="no-underline text-white font-satisfy ">Neel</a>
      </motion.div>

      <div className="m-4 hidden flex-row items-center md:flex ">
        <ul className="m-0 p-0 flex flex-row list-none">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.id}
              className="mx-4"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => handleScroll(item.id)}
                className="text-white no-underline text-sm"
              >
                <span className="hover:text-[#89bbfe] transition-colors duration-200">
                  {item.text}
                </span>
              </a>
            </motion.li>
          ))}
          <motion.li
            className="mx-4"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: NAV_ITEMS.length * 0.1
            }}
          >
            <a
              href="https://drive.google.com/drive/folders/1DQ4kkRG_uoiwEjbzq-Um6JYE4UI7zu6X?usp=drive_link"
              className="text-white no-underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
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
