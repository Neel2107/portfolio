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
      className={` ${
        isSidebarOpen ? "tw-block" : "tw-hidden"
      } lg:tw-hidden   animate__animated animate__slideInUp tw-fixed tw-w-full tw-h-screen tw-z-[999] tw-flex tw-flex-col tw-items-center tw-justify-end`}
    >
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-[#111928]/60 tw-w-full tw-p-7 tw-backdrop-blur-[5px] tw-rounded-t-2xl tw-relative">
        {sidebarData.map((data) => {
          return (
            <a
              href={data.location}
              className="tw-text-xl tw-mb-5 tw-text-[#76accb]"
            >
              {data.name}
            </a>
          );
        })}
        <div onClick={handleSidbar} className="tw-absolute tw-right-4 tw-top-4">
          <img
            src="/sidebar/close-icon.svg"
            alt="close-btn"
            className="tw-w-5 tw-h-5 tw-cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
