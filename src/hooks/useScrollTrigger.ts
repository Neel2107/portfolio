import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useScrollTrigger = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create scroll-based animations for sections
    const sections = document.querySelectorAll('section, [id]');
    
    // Basic fade-in animation for all sections
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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
    
    // Animate skill cards with staggered effect
    const skillCards = document.querySelectorAll('#skills .grid > div');
    if (skillCards.length > 0) {
      gsap.fromTo(
        skillCards,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    
    // Animate project cards with staggered effect
    const projectCards = document.querySelectorAll('#project .grid > div, #other-projects .grid > div');
    if (projectCards.length > 0) {
      gsap.fromTo(
        projectCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: '#project, #other-projects',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    
    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
    
    // Animate section titles
    const sectionTitles = document.querySelectorAll('h2, h3');
    sectionTitles.forEach((title) => {
      gsap.fromTo(
        title,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    
    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};