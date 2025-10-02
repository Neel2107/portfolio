import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import { resumeURL } from "@/utils/constants";
import { useLenis } from "lenis/react";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

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
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("about");

  // Track active section using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section && lenis) {
      lenis.scrollTo(section, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`sticky top-4 z-50 md:border md:border-primary/10 rounded-2xl backdrop-blur-3xl mx-4 sm:mx-0 `}
    >
      <div className="w-full flex justify-between  p-3 ">
        {/* Mobile Menu Button - Left Side */}
        <div className="md:hidden">
          <motion.button
            onClick={handleSidebar}
            className="flex items-center justify-center"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <Menu className="size-5 text-primary" aria-label="Menu button" />
          </motion.button>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex flex-row items-center justify-between">
          <ul className="m-0 p-0 flex flex-row  items-center   list-none">
            {NAV_ITEMS.map((item, index) => (
              <motion.li
                key={item.id}
                className="mx-4"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className={`text-primary no-underline text-sm transition-colors duration-200 hover:cursor-pointer ${
                    activeSection === item.id ? "font-medium" : "text-secondary"
                  }`}
                >
                  <span className="relative">{item.text}</span>
                </motion.button>
              </motion.li>
            ))}
            <motion.li
              className="mx-4"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: NAV_ITEMS.length * 0.1,
              }}
            >
              <motion.a
                href={resumeURL}
                className="text-primary no-underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-secondary hover:texpr transition-colors duration-200">
                  Resume
                </span>
              </motion.a>
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: NAV_ITEMS.length * 0.1,
          }}
          className="ml-2"
        >
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </motion.div>

        {/* Spacer for mobile to keep menu button on left */}
        <div className="md:hidden w-5"></div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
