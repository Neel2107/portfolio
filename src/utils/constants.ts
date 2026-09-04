import { Github, Linkedin } from "lucide-react";

export const ANIMATION = {
  initial: { opacity: 0, filter: "blur(4px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const CONTAINER_STYLES = {
  section: "flex items-center justify-center  py-16 md:py-24 ",

  sectionContent: "w-full max-w-4xl mx-auto px-4 md:px-0",

  spacing: {
    contentTop: "mt-4 md:mt-6 lg:mt-8",
    elementGap: "space-y-6 md:space-y-8 lg:space-y-10",
  },
};

export const linkedinUrl = "https://www.linkedin.com/in/neelpatel2107/";

// Centralized URL constants to avoid duplication
const URLS = {
  // Core Web Technologies
  TYPESCRIPT: "https://www.typescriptlang.org",
  JAVASCRIPT: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  PYTHON: "https://www.python.org",

  // React Ecosystem
  REACT: "https://react.dev",
  REACT_NATIVE: "https://reactnative.dev",
  NEXT_JS: "https://nextjs.org",
  VITE: "https://vitejs.dev",
  TANSTACK: "https://tanstack.com",

  // Styling & UI
  TAILWIND_CSS: "https://tailwindcss.com",
  NATIVEWIND: "https://www.nativewind.dev",

  // Backend & Database
  NODE_JS: "https://nodejs.org",
  POSTGRESQL: "https://www.postgresql.org",
  SUPABASE: "https://supabase.com",
  PRISMA: "https://www.prisma.io",
  FASTAPI: "https://fastapi.tiangolo.com",
  POLARS: "https://pola.rs",
  STRAPI: "https://strapi.io",

  // Apple Platforms
  SWIFT: "https://www.swift.org",
  SWIFTUI: "https://developer.apple.com/xcode/swiftui/",
  MACOS: "https://developer.apple.com/macos/",

  // Development Tools
  EXPO: "https://expo.dev",
  ANIMATED: "https://docs.swmansion.com/react-native-reanimated",
  GIT: "https://git-scm.com",
  GITHUB: "https://github.com",
  AWS: "https://aws.amazon.com",

} as const;

// Tech stack URL mappings using centralized constants
const techUrls: Record<string, string> = {
  "React Native": URLS.REACT_NATIVE,
  "Nativewind": URLS.NATIVEWIND,
  "Expo": URLS.EXPO,
  "Reanimated": URLS.ANIMATED,
  "React + Vite": URLS.VITE,
  "Tailwind CSS": URLS.TAILWIND_CSS,
  "Next.js": URLS.NEXT_JS,
  "Node.js": URLS.NODE_JS,
  "Strapi": URLS.STRAPI,
  "Swift": URLS.SWIFT,
  "SwiftUI": URLS.SWIFTUI,
  "macOS": URLS.MACOS,
};

// Helper function to create tech stack items with URLs
const createTechStack = (techNames: string[]) =>
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
    title: "Mend",
    description:
      "A native macOS menu bar app that fixes selected text in any application with one shortcut. Works with OpenAI, Gemini, or any OpenAI-compatible endpoint, keeps API keys in Keychain, and replaces text in place with no window to open.",
    tech: createTechStack(["Swift", "SwiftUI", "macOS"]),
    image: "/project/mend.png",
    github: "https://github.com/Neel2107/Mend",
    live: "https://mend.itsneel.com",
  },
  {
    title: "Fluey AI",
    description:
      "A React Native chat application with modern AI chat features, including streaming responses, markdown rendering, and math support.",
    tech: createTechStack(["React Native", "Nativewind", "Expo", "Reanimated"]),
    image: "/project/fluey-ai.png",
    github: "https://github.com/Neel2107/fluey-ai",
  },
  {
    title: "Swiggy UI",
    description:
      "This project aims to replicate the user interface of the Swiggy app. Firebase authentication is implemented for phone number OTP verification, ensuring secure access to the app.",
    image: "/project/swiggy-clone.png",
    tech: createTechStack(["React Native", "Nativewind", "Expo", "Reanimated"]),
    github: "https://github.com/Neel2107/swiggy-clone",
  },
];

export interface SkillCard {
  name: string;
  icon: string;
  /** Variant swapped in under the dark theme, for marks that are black on light. */
  iconDark?: string;
  url: string;
}

export interface SkillGroup {
  title: string;
  skills: SkillCard[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: "/skills/typescript.svg", url: URLS.TYPESCRIPT },
      { name: "JavaScript", icon: "/skills/javascript.svg", url: URLS.JAVASCRIPT },
      { name: "Python", icon: "/skills/python.svg", url: URLS.PYTHON },
      { name: "HTML", icon: "/skills/html.svg", url: URLS.HTML },
      { name: "CSS", icon: "/skills/css.svg", url: URLS.CSS },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/skills/react.svg", iconDark: "/skills/react-dark.svg", url: URLS.REACT },
      { name: "Next.js", icon: "/skills/nextjs.svg", url: URLS.NEXT_JS },
      { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg", url: URLS.TAILWIND_CSS },
      { name: "TanStack", icon: "/skills/tanstack.svg", iconDark: "/skills/tanstack-dark.svg", url: URLS.TANSTACK },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: "/skills/react.svg", iconDark: "/skills/react-dark.svg", url: URLS.REACT_NATIVE },
      { name: "Expo", icon: "/skills/expo.svg", url: URLS.EXPO },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", icon: "/skills/nodejs.svg", url: URLS.NODE_JS },
      { name: "FastAPI", icon: "/skills/fastapi.svg", url: URLS.FASTAPI },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg", url: URLS.POSTGRESQL },
      { name: "Supabase", icon: "/skills/supabase.svg", url: URLS.SUPABASE },
      { name: "Prisma", icon: "/skills/prisma.svg", iconDark: "/skills/prisma-dark.svg", url: URLS.PRISMA },
      { name: "Polars", icon: "/skills/polars.svg", url: URLS.POLARS },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: "/skills/git.svg", url: URLS.GIT },
      { name: "GitHub", icon: "/skills/github.svg", iconDark: "/skills/github-dark.svg", url: URLS.GITHUB },
      { name: "AWS", icon: "/skills/aws.svg", iconDark: "/skills/aws-dark.svg", url: URLS.AWS },
    ],
  },
];

export const resumeURL =
  "https://drive.google.com/drive/folders/1DQ4kkRG_uoiwEjbzq-Um6JYE4UI7zu6X?usp=drive_link";
