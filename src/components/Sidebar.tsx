import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import { motion } from "motion/react";
import { Drawer } from "vaul";

interface SidebarProps {
  isSidebarOpen: boolean;
  handleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, handleSidebar }: SidebarProps) => {
  const lenis = useLenis();

  const sidebarData = [
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "project",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Experience",
      id: "experience",
    },
    {
      name: "Contact",
      id: "contact",
    },
    {
      name: "Resume",
      id: "resume",
      external: true,
      url: "https://drive.google.com/drive/folders/1DQ4kkRG_uoiwEjbzq-Um6JYE4UI7zu6X?usp=drive_link",
    },
  ];

  // Handle navigation when clicking on sidebar items
  const handleSidebarItemClick = (item: (typeof sidebarData)[0]) => {
    if (item.external && item.url) {
      window.open(item.url, "_blank");
      handleSidebar(); // Close sidebar
      return;
    }

    if (item.id) {
      const section = document.getElementById(item.id);

      if (section) {
        // Close sidebar first
        handleSidebar();

        // Small delay to allow sidebar animation to complete
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(section, {
              offset: 0,
              duration: 1.2,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            // Fallback to native scrolling
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  };

  return (
    <Drawer.Root open={isSidebarOpen} onOpenChange={handleSidebar}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]" />
        <Drawer.Content className="bg-background/90 backdrop-blur-md flex flex-col rounded-t-2xl h-[70vh] mt-24 fixed bottom-0 left-0 right-0 z-[999] lg:hidden">
          {/* Add Title for accessibility */}
          <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>

          {/* Add Description for accessibility */}
          <Drawer.Description className="sr-only">
            Site navigation links including About, Projects, Skills, Experience,
            Other Projects, Contact, and Resume
          </Drawer.Description>

          <div className="p-7 pb-10 flex-1 overflow-auto">
            <div className="flex flex-col items-center space-y-6 pt-2">
              {sidebarData.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="text-xl text-primary hover:text-white transition-colors"
                  onClick={() => handleSidebarItemClick(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
            <motion.button
              className="absolute top-4 right-4 text-white p-1"
              onClick={handleSidebar}
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Sidebar;
