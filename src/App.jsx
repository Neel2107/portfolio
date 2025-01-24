import React, { Suspense, useState } from "react";
import BlobEffect from "./components/BlobEffect/BlobEffect";
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
    <div className="App">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidbar={handleSidebar} />

     

      <div className="firstBlur" id="blur">
        <Navbar handleSidbar={handleSidebar} />
      </div>

      <BlobEffect />

      <div id="blur">
        <Suspense fallback={<div>Loading...</div>}>
          <MainContainer />
          <AboutMeSection />
          <ProjectContainer />
          <OtherProjects />
          <SkillsSection />
          <Experience />
          <ContactSection />
        </Suspense>
      </div>
    </div>
  );
}

export default App;