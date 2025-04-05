import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface SidebarProps {
    isSidebarOpen: boolean;
    handleSidbar: () => void;
}

const Sidebar = ({ isSidebarOpen, handleSidbar }: SidebarProps) => {
    const sidebarData = [
        {
            name: "About",
            location: "#about",
        },
        {
            name: "Projects",
            location: "#project",
        },
        {
            name: "Skills",
            location: "#skills",
        },
        {
            name: "Experience",
            location: "#experience", // Fixed from #education
        },
        {
            name: "Other Projects",
            location: "#other-projects",
        },
        {
            name: "Contact",
            location: "#contact",
        },
        {
            name: "Resume",
            location: "https://drive.google.com/drive/folders/1DQ4kkRG_uoiwEjbzq-Um6JYE4UI7zu6X?usp=drive_link",
        },
    ];

    // Implement the handleSidebarItemClick function inside the component
    const handleSidebarItemClick = (location: string) => {
        if (location.startsWith('#')) {
            const sectionId = location.substring(1);
            const section = document.getElementById(sectionId);

            if (section && window.lenis) {
                handleSidbar(); // Close sidebar
                window.lenis.scrollTo(section, {
                    offset: 0,
                    duration: 1.2,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        }
    };

    return (
        <AnimatePresence>
            {isSidebarOpen && (
                <motion.div
                    className="lg:hidden fixed w-full h-screen z-[999] flex flex-col items-center justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center bg-[#0d0d10]/60 w-full p-7 backdrop-blur-[5px] rounded-t-2xl relative"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        {sidebarData.map((data) => (
                            <a
                                key={data.name}
                                href={data.location}
                                className="text-xl mb-5 text-[#76accb]"
                                onClick={(e) => {
                                    if (data.location.startsWith('#')) {
                                        e.preventDefault();
                                        handleSidebarItemClick(data.location);
                                    } else {
                                        // For external links like Resume, just close the sidebar
                                        handleSidbar();
                                    }
                                }}
                            >
                                {data.name}
                            </a>
                        ))}
                        <div onClick={handleSidbar} className="absolute right-4 top-4">
                            <X className="w-6 h-6 text-[#89bbfe]" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
