import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SidebarSection/Sidebar.tsx";
import "./index.css";

const AboutMeSection = React.lazy(() => import("./components/AboutMeSection/AboutMeSection"));
const MainContainer = React.lazy(() => import("./components/MainContainer/MainContainer"));
const OtherProjects = React.lazy(() => import("./components/OtherProjects/OtherProjects"));
const SkillsSection = React.lazy(() => import("./components/SkillsSection/SkillsSection"));
const Experience = React.lazy(() => import("./components/Experience/Experience"));
const ContactSection = React.lazy(() => import("./components/ContactSection/ContactSection"));
const ProjectContainer = React.lazy(() => import("./components/ProjectContainer/ProjectContainer"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative bg-[#0d0d10]">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidbar={handleSidebar} />
      <Navbar handleSidbar={handleSidebar} />
      <MainContainer />
      <AboutMeSection />
      <ProjectContainer />
      <SkillsSection />
      <Experience />
      <OtherProjects />
      <ContactSection />
    </div>
  );
}

export default App;