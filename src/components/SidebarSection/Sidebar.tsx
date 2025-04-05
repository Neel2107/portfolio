import { X } from "lucide-react";
import { Drawer } from "vaul";

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
            location: "#experience",
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

    // Handle navigation when clicking on sidebar items
    const handleSidebarItemClick = (e: React.MouseEvent, location: string) => {
        e.preventDefault();

        // Handle external links
        if (!location.startsWith('#')) {
            window.open(location, '_blank');
            handleSidbar(); // Close sidebar
            return;
        }

        // Handle internal navigation
        const sectionId = location.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            // Close sidebar first
            handleSidbar();

            // Small delay to allow sidebar animation to complete
            setTimeout(() => {
                if (window.lenis) {
                    window.lenis.scrollTo(section, {
                        offset: 0,
                        duration: 1.2,
                        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
                    // Fallback to native scrolling
                    const offsetTop = section.offsetTop;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            }, 300);
        }
    };

    return (
        <Drawer.Root open={isSidebarOpen} onOpenChange={handleSidbar}>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]" />
                <Drawer.Content className="bg-[#0d0d10]/90 backdrop-blur-md flex flex-col rounded-t-2xl h-[70vh] mt-24 fixed bottom-0 left-0 right-0 z-[999] lg:hidden">
                    {/* Add Title for accessibility */}
                    <Drawer.Title className="sr-only">
                        Navigation Menu
                    </Drawer.Title>
                    
                    {/* Add Description for accessibility */}
                    <Drawer.Description className="sr-only">
                        Site navigation links including About, Projects, Skills, Experience, Other Projects, Contact, and Resume
                    </Drawer.Description>
                    
                    <div className="p-7 pb-10 flex-1 overflow-auto">
                        <div className="flex flex-col items-center space-y-6 pt-2">
                            {sidebarData.map((data) => (
                                <a
                                    key={data.name}
                                    href={data.location}
                                    className="text-xl text-[#76accb] hover:text-white transition-colors"
                                    onClick={(e) => handleSidebarItemClick(e, data.location)}
                                >
                                    {data.name}
                                </a>
                            ))}
                        </div>
                        <button
                            className="absolute top-4 right-4 text-white p-1"
                            onClick={handleSidbar}
                            aria-label="Close navigation menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default Sidebar;
