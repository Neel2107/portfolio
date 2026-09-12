import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import { cn } from "@/lib/utils";
import { resumeURL } from "@/utils/constants";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "experience", text: "Experience" },
  { id: "project", text: "Projects" },
  { id: "contact", text: "Contact" },
];

interface NavbarProps {
  handleSidebar: () => void;
}

const Navbar = ({ handleSidebar }: NavbarProps) => {
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
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="site-nav sticky top-4 z-50 rounded-2xl mx-4 sm:mx-0"
    >
      <div className="w-full flex justify-between items-center p-2 pl-4 md:pl-2">
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
          <ul className="m-0 p-0 flex flex-row items-center gap-1 list-none">
            {NAV_ITEMS.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={cn(
                    "nav-pill",
                    activeSection === item.id && "nav-pill--active",
                  )}
                >
                  {item.text}
                </button>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: NAV_ITEMS.length * 0.1,
              }}
            >
              <a
                href={resumeURL}
                className="nav-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
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
        >
          <ThemeToggleButton blur />
        </motion.div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
