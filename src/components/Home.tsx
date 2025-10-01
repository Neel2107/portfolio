"use client"
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import ProjectContainer from "@/components/ProjectContainer";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillsSection";

import { useLenis } from "@/hooks/useLenis";
import { Analytics } from "@vercel/analytics/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const lenisRef = useLenis();

    // Initialize ScrollTrigger with optimized performance
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Clear any existing ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Cache DOM elements to avoid repeated queries
        const sectionsToAnimate = [
            '#about', '#project', '#skills', '#experience', '#contact'
        ].map(selector => document.querySelector(selector)).filter(Boolean);

        // Only animate specific sections, not all elements
        if (sectionsToAnimate.length > 0) {
            sectionsToAnimate.forEach((section, index) => {
                gsap.fromTo(
                    section,
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%',
                            end: 'bottom 15%',
                            toggleActions: 'play none none reverse',
                            once: true, // Better performance - animate once
                            fastScrollEnd: true,
                            // Add performance optimizations
                            invalidateOnRefresh: true,
                            refreshPriority: index, // Prioritize earlier sections
                        },
                    }
                );
            });
        }

        // Performance optimization: batch ScrollTrigger refresh
        ScrollTrigger.batch('.scroll-reveal', {
            onEnter: (elements) => {
                gsap.fromTo(elements, {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                });
            },
            start: "top 90%",
            once: true
        });

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.clearScrollMemory();
        };
    }, []);

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

export default App;