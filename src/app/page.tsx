"use client";
import Navbar from "@/components/common/Navbar";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import MainContainer from "@/components/MainContainer";
import ProjectContainer from "@/components/ProjectContainer";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillsSection";

import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative bg-gradient-main min-h-screen ">
      <Analytics />

      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />

      <div className="flex flex-col max-w-2xl mx-auto">
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
