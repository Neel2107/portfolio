import { AnimatePresence } from "framer-motion";
import React, { Suspense, useState } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import PageTransition from "./components/PageTransition/PageTransition";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
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
      <ParallaxBackground />
      {/* <LoadingBar /> */}
      {/* <CustomCursor /> */}
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidbar={handleSidebar} />
      <Navbar handleSidbar={handleSidebar} />

      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <PageTransition id="home">
            <MainContainer />
          </PageTransition>

          <PageTransition id="about">
            <AboutMeSection />
          </PageTransition>

          <PageTransition id="projects">
            <ProjectContainer />
          </PageTransition>

          <PageTransition id="skills">
            <SkillsSection />
          </PageTransition>

          <PageTransition id="experience">
            <Experience />
          </PageTransition>

          <PageTransition id="other-projects">
            <OtherProjects />
          </PageTransition>

          <PageTransition id="contact">
            <ContactSection />
          </PageTransition>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;