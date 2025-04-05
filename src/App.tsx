import { useEffect, useState, useRef } from "react";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Experience from "./components/Experience/Experience";
import LoadingBar from "./components/LoadingBar/LoadingBar";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Sidebar from "./components/SidebarSection/Sidebar";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import { useLenis } from "./hooks/useLenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import CustomCursor from "./components/CustomCursor/CustomCursor";
import Loader from "./components/Loader/Loader";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useLenis();
  const hasInitializedRef = useRef(false);
  
  // Handle initial loading state - completely revised approach
  useEffect(() => {
    // Check if this is the first render of the component
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      
      // Check localStorage only once per session
      const hasVisited = localStorage.getItem('hasVisitedPortfolio');
      
      if (!hasVisited) {
        // First visit - show loading animation
        const timer = setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem('hasVisitedPortfolio', 'true');
        }, 1500);
        
        return () => clearTimeout(timer);
      } else {
        // Already visited - skip loading animation
        setIsLoading(false);
      }
    }
  }, []);
  
  // Initialize ScrollTrigger in the App component - separated from loading logic
  useEffect(() => {
    if (isLoading) return; // Don't initialize until loading is complete
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Clear any existing ScrollTrigger instances first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Create scroll-based animations for sections
    const sections = document.querySelectorAll('section, [id]');
    
    // Basic fade-in animation for all sections - only blur effect, no staggering
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, filter: "blur(4px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    
    // Add blur fade-in for text elements
    const textElements = document.querySelectorAll('h1, h2, h3, p, a:not(nav a)');
    textElements.forEach((element) => {
      gsap.fromTo(
        element,
        { filter: "blur(2px)", opacity: 0 },
        {
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    
    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoading]);

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <LoadingBar />
          <Navbar handleSidbar={handleSidebar} />
          <Sidebar isSidebarOpen={isSidebarOpen} handleSidbar={handleSidebar} />
          <ParallaxBackground />
          {/* <CustomCursor /> */}
          
          {/* Main content with initial blur fade-in effect */}
          <div className="content-wrapper" style={{ 
            filter: 'blur(0px)',
            opacity: 1,
            transition: 'filter 0.8s ease-out, opacity 0.8s ease-out'
          }}>
            <MainContainer />
            <AboutMeSection />
            <ProjectContainer />
            <SkillsSection />
            <Experience />
            <OtherProjects />
            <ContactSection />
          </div>
        </>
      )}
    </div>
  );
}

export default App;