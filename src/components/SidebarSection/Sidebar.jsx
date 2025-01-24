import { ChevronDown, X } from "lucide-react";
import React from "react";

const Sidebar = ({ isSidebarOpen, handleSidbar }) => {
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
      location: "#education",
    },
    {
      name: "Contact",
      location: "#contact",
    },
    {
      name: "Resume",
      location:
        "https://drive.google.com/file/d/1QzKjHsrlKisq8ITQ1Umgg9s0MjxY2Q1y/view?usp=sharin",
    },
  ];
  return (
    <div
      className={` ${isSidebarOpen ? "block" : "hidden"
        } lg:hidden   animate__animated animate__slideInUp fixed w-full h-screen z-[999] flex flex-col items-center justify-end`}
    >
      <div className="flex flex-col items-center justify-center bg-[#111928]/60 w-full p-7 backdrop-blur-[5px] rounded-t-2xl relative">
        {sidebarData.map((data) => {
          return (
            <a
              key={data.name}
              href={data.location}
              className="text-xl mb-5 text-[#76accb]"
            >
              {data.name}
            </a>
          );
        })}
        <div onClick={handleSidbar} className="absolute right-4 top-4">
        <X className="w-6 h-6 text-[#89bbfe]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
