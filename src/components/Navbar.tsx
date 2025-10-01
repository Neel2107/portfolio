import { Menu } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const NAV_ITEMS = [
  { id: "about", text: "About" },
  { id: "project", text: "Projects" },
  { id: "skills", text: "Skills" },
  { id: "experience", text: "Experience" },
  { id: "contact", text: "Contact" },
];

interface NavbarProps {
  handleSidebar: () => void;
}

const Navbar = ({ handleSidebar }: NavbarProps) => {

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section && window.lenis) {
      const offset = 0;
      window.lenis.scrollTo(section, {
        offset,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };



  return (
    <nav
      className={`sticky top-4 z-50 md:border md:border-white/10 rounded-2xl backdrop-blur-3xl`}
    >
      <div className="w-full flex  justify-between md:justify-center p-3">
        {/* Mobile Menu Button - Left Side */}
        <div className="md:hidden">
          <motion.button
            onClick={handleSidebar}
            className="flex items-center justify-center"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
          >
            <Menu
              className="size-5 text-white"
              aria-label="Menu button"
            />
          </motion.button>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex flex-row items-center">
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

        {/* Spacer for mobile to keep menu button on left */}
        <div className="md:hidden w-5"></div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
