import { Github, Linkedin } from "lucide-react";

export const ANIMATION = {
  initial: { opacity: 0, filter: "blur(4px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const CONTAINER_STYLES = {
  // Standard section container with consistent spacing
  section: "flex items-center justify-center py-16 md:py-24 lg:py",

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
  },
};

export const linkedinUrl = "https://www.linkedin.com/in/neelpatel2107/";

// Centralized URL constants to avoid duplication
export const URLS = {
  // Core Web Technologies
  TYPESCRIPT: "https://www.typescriptlang.org",
  JAVASCRIPT: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",

  // React Ecosystem
  REACT: "https://react.dev",
  REACT_NATIVE: "https://reactnative.dev",
  NEXT_JS: "https://nextjs.org",
  VITE: "https://vitejs.dev",

  // Styling & UI
  TAILWIND_CSS: "https://tailwindcss.com",
  SASS: "https://sass-lang.com",
  NATIVEWIND: "https://www.nativewind.dev",

  // Backend & Database
  NODE_JS: "https://nodejs.org",
  MONGODB: "https://www.mongodb.com",
  POSTGRESQL: "https://www.postgresql.org",
  SUPABASE: "https://supabase.com",
  PRISMA: "https://www.prisma.io",
  STRAPI: "https://strapi.io",
  FIREBASE: "https://firebase.google.com",

  // Development Tools
  EXPO: "https://expo.dev",
  ANIMATED: "https://docs.swmansion.com/react-native-reanimated",
  GIT: "https://git-scm.com",
  GITHUB: "https://github.com",
  AWS: "https://aws.amazon.com",

} as const;

// Tech stack URL mappings using centralized constants
export const techUrls: Record<string, string> = {
  "React Native": URLS.REACT_NATIVE,
  "Nativewind": URLS.NATIVEWIND,
  "Expo": URLS.EXPO,
  "Reanimated": URLS.ANIMATED,
  "React + Vite": URLS.VITE,
  "Tailwind CSS": URLS.TAILWIND_CSS,
  "Next JS": URLS.NEXT_JS,
  "Node JS": URLS.NODE_JS,
  "Strapi": URLS.STRAPI,
};

// Helper function to create tech stack items with URLs
export const createTechStack = (techNames: string[]) =>
  techNames.map(name => ({ name, url: techUrls[name] }));

export const socialLinks = [
  {
    name: "LinkedIn",
    href: linkedinUrl,
    icon: Linkedin,
    color: "#0A66C2",
    description: "Connect with me professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/Neel2107",
    icon: Github,
    color: "#f0b400",
    description: "Check out my code repositories",
  },
];


export const featuredProjects = [
  {
    title: "Swiggy UI",
    description:
      "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
    image: "/project/swiggy-clone.png",
    tech: createTechStack(["React Native", "Nativewind", "Expo", "Reanimated"]),
    github: "https://github.com/Neel2107/swiggy-clone",
  },
  {
    title: "Quick Bites",
    description:
      "Quick Bites is a web application built with React.js and Swiggy's API.",
    image: "/project/quickbites.png",
    tech: createTechStack(["React + Vite", "Tailwind CSS"]),
    github: "https://github.com/Neel2107/QuickBites",
    live: "https://quick-bites-nova.vercel.app/",
  },
  {
    title: "Nike Shoe Store",
    description:
      "Created and deployed a fully functional shoe store website on Vercel, enabling users to explore and purchase a wide range of products.",
    image: "/project/shoe-store.png",
    tech: createTechStack(["Next JS", "Node JS", "Tailwind CSS", "Strapi"]),
    github: "https://github.com/Neel2107/Shoe-Store",
    live: "https://shoe-store1.vercel.app/",
  },
];

interface SkillCard {
  name: string;
  icon: string;
  url: string;
}

export const skillsCardsData: SkillCard[] = [
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    url: URLS.TYPESCRIPT,
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg",
    url: URLS.JAVASCRIPT,
  },
  {
    name: "Next.JS",
    icon: "/skills/nextjs.svg",
    url: URLS.NEXT_JS,
  },
  {
    name: "React",
    icon: "/skills/react.svg",
    url: URLS.REACT,
  },
  {
    name: "React Native",
    icon: "/skills/react.svg",
    url: URLS.REACT_NATIVE,
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwindcss.svg",
    url: URLS.TAILWIND_CSS,
  },
  {
    name: "HTML",
    icon: "/skills/html.svg",
    url: URLS.HTML,
  },
  {
    name: "CSS",
    icon: "/skills/css.svg",
    url: URLS.CSS,
  },
  {
    name: "Node.JS",
    icon: "/skills/nodejs.svg",
    url: URLS.NODE_JS,
  },
  {
    name: "Expo",
    icon: "/skills/expo.svg",
    url: URLS.EXPO,
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.svg",
    url: URLS.MONGODB,
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.svg",
    url: URLS.POSTGRESQL,
  },
  {
    name: "Supabase",
    icon: "/skills/supabase.svg",
    url: URLS.SUPABASE,
  },
  {
    name: "Prisma",
    icon: "/skills/prisma.svg",
    url: URLS.PRISMA,
  },
  {
    name: "Firebase",
    icon: "/skills/firebase.svg",
    url: URLS.FIREBASE,
  },
  {
    name: "Sass",
    icon: "/skills/sass.svg",
    url: URLS.SASS,
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
    url: URLS.GIT,
  },
  {
    name: "GitHub",
    icon: "/skills/github.svg",
    url: URLS.GITHUB,
  },
  {
    name: "AWS",
    icon: "/skills/aws.svg",
    url: URLS.AWS,
  }
];