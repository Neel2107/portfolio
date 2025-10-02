"use client";
import Navbar from "@/components/common/Navbar";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import MainContainer from "@/components/MainContainer";
import ProjectContainer from "@/components/ProjectContainer";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillsSection";

import { useLenis } from "@/contexts/AnimationContext";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (lenis && !isSidebarOpen) {
      lenis.start();
    } else if (lenis && isSidebarOpen) {
      lenis.stop();
    }
  }, [isSidebarOpen, lenis]);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative bg-gradient-main min-h-screen ">
      <Analytics />

      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />

      <div className=" flex flex-col max-w-3xl mx-auto">
        <Navbar handleSidebar={handleSidebar} />
        <MainContainer />
        <ProjectContainer />
        <SkillsSection />
        <Experience />
        <ContactSection />
      </div>
    </div>
  );
}
