export const COLORS = {
  primary: 'var(--primary)',
  primaryLight: 'var(--primary-light)',
  background: 'var(--background)',
  secondary: 'var(--secondary)',
  foreground: 'var(--foreground)',
  text: {
    primary: 'var(--foreground)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    accent: 'var(--primary)',
  },
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(137, 187, 254, 0.5)',
  }
};

export const ANIMATION = {
  initial: { opacity: 0, filter: "blur(4px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const CONTAINER_STYLES = {
  // Standard section container with consistent spacing
  section: "min-h-screen flex items-center justify-center py-10",
  
  // Section content wrapper with consistent padding
  sectionContent: "w-full max-w-4xl mx-auto",
  
  // Standard card styling
  card: "bg-zinc-900 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-4",
  
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

// Add these animation variants
export const SCROLL_ANIMATIONS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  },
  stagger: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0
      }
    }
  }
};