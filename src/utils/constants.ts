import { Github, Linkedin } from "lucide-react";


export const ANIMATION = {
  initial: { opacity: 0, filter: "blur(4px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const CONTAINER_STYLES = {
  // Standard section container with consistent spacing
  section: "flex items-center justify-center py-16 md:py-24 lg:py-32",
  
  // Section content wrapper with consistent padding
  sectionContent: "w-full max-w-4xl mx-auto px-4 md:px-0",
  
  // Standard card styling
  card: "bg-zinc-900 rounded-lg border border-gray-800 hover:border-primary/50 transition-all p-4",
  
  // Spacing utilities for consistent vertical rhythm
  spacing: {
    // Section spacing
    sectionTop: "pt-16 md:pt-24 lg:pt-32",
    sectionBottom: "pb-16 md:pb-24 lg:pb-32",
    
    // Content spacing
    contentTop: "mt-8 md:mt-12 lg:mt-16",
    contentBottom: "mb-8 md:mb-12 lg:mb-16",
    
    // Element spacing
    elementGap: "space-y-6 md:space-y-8 lg:space-y-10",
    elementGapSmall: "space-y-4 md:space-y-6",
    elementGapLarge: "space-y-8 md:space-y-12 lg:space-y-16",
  }
};

export   const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/neelpatel2107/",
    icon: Linkedin,
    color: "#0A66C2",
    description: "Connect with me professionally"
  },
  {
    name: "GitHub",
    href: "https://github.com/Neel2107",
    icon: Github,
    color: "#f0b400",
    description: "Check out my code repositories"
  },
];

export const linkedinUrl = "https://www.linkedin.com/in/neelpatel2107/";