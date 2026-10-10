import { SoundToggleButton } from "@/components/common/SoundSwitch";
import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import { cn } from "@/lib/utils";
import { resumeURL } from "@/utils/constants";
import { Menu } from "lucide-react";
import { motion, type Variants } from "motion/react";
import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "experience", text: "Experience" },
  { id: "project", text: "Projects" },
  { id: "contact", text: "Contact" },
];

// The bar enters as one piece, in step with the hero: it sharpens and
// fades in while rising into place. Its items never move on their own.
const NAV_ENTER: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 0.7 },
      filter: { duration: 0.7 },
      y: { type: "spring", duration: 1.4, bounce: 0 },
    },
  },
};

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
    <motion.nav
      className="site-nav sticky top-4 z-50 rounded-2xl mx-4 sm:mx-0"
      variants={NAV_ENTER}
      initial="initial"
      animate="visible"
    >
      <div className="w-full flex justify-between items-center p-2 pl-4 md:pl-2">
        {/* Mobile Menu Button - Left Side */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={handleSidebar}
            className="flex items-center justify-center"
          >
            <Menu className="size-5 text-primary" aria-label="Menu button" />
          </button>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex flex-row items-center justify-between">
          <ul className="m-0 p-0 flex flex-row items-center gap-1 list-none">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
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
              </li>
            ))}
            <li>
              <a
                href={resumeURL}
                className="nav-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <SoundToggleButton />
          <ThemeToggleButton blur />
        </div>
      </div>
    </motion.nav>
  );
};

export default React.memo(Navbar);
