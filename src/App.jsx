import React, { Suspense, useState } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SidebarSection/Sidebar";
import "./index.css";

// Lazy load components
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
    <div className="relative ">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidbar={handleSidebar} />
      <Navbar handleSidbar={handleSidebar} />
      {/* <BlobEffect /> */}
      {/* <div className="backdrop-blur-[200px]"> */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      }>
        <MainContainer />
        <AboutMeSection />
        <ProjectContainer />
        <OtherProjects />
        <SkillsSection />
        <Experience />
        <ContactSection />
      </Suspense>
    </div>
    // </div>
  );
}

export default App;