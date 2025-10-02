"use client";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/common/Navbar";
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

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#89bbfe]/10 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#bae6ff]/5 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />

      <div className=" flex flex-col max-w-2xl mx-auto">
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
