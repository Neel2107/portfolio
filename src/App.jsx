import React, { Suspense, useState } from "react";
import BlobEffect from "./components/BlobEffect/BlobEffect";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SidebarSection/Sidebar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import "./index.scss";

// Lazy load components
const AboutMeSection = React.lazy(() => import("./components/AboutMeSection/AboutMeSection"));
const MainContainer = React.lazy(() => import("./components/MainContainer/MainContainer"));
const OtherProjects = React.lazy(() => import("./components/OtherProjects/OtherProjects"));
const SkillsSection = React.lazy(() => import("./components/SkillsSection/SkillsSection"));
const EducationSection = React.lazy(() => import("./components/EducationSection/EducationSection"));
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
      <SocialLinks />

      <div className="rightLink animate__animated animate__fadeIn animate__delay-2s">
        <a className="myEmail" href="mailto:neelpatel805804@gmail.com">
          <span className="email">neelpatel805804@gmail.com</span>
        </a>
        <div className="verticalLink" />
      </div>

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
          <EducationSection />
          <ContactSection />
        </Suspense>
      </div>
    </div>
  );
}

export default App;