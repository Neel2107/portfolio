import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Experience from "./components/Experience/Experience";
import LoadingBar from "./components/LoadingBar/LoadingBar";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import PageTransition from "./components/PageTransition/PageTransition";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Sidebar from "./components/SidebarSection/Sidebar";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import { useLenis } from "./hooks/useLenis";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const lenisRef = useLenis();

  useEffect(() => {
    if (lenisRef.current && !isSidebarOpen) {

      lenisRef.current.start();
    } else if (lenisRef.current && isSidebarOpen) {
      lenisRef.current.stop();
    }
  }, [isSidebarOpen, lenisRef]);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative bg-[#0d0d10] min-h-screen">
      <>
        <LoadingBar />
        <Navbar handleSidbar={handleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} handleSidbar={handleSidebar} />
        <ParallaxBackground />
        <AnimatePresence mode="wait">
          <PageTransition id="home">
            <MainContainer />
            <AboutMeSection />
            <ProjectContainer />
            <SkillsSection />
            <Experience />
            <ContactSection />
          </PageTransition>
        </AnimatePresence>
      </>
    </div>
  );
}

export default App;