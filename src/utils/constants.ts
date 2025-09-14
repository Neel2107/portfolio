export const COLORS = {
  primary: '#89bbfe',
  background: '#0d0d10',
  card: '#1a1a1a',
  text: {
    primary: '#ffffff',
    secondary: '#gray-400',
    accent: '#89bbfe',
  },
  border: {
    default: 'gray-800',
    hover: '#89bbfe50',
  }
};

export const ANIMATION = {
  initial: { opacity: 0, filter: "blur(4px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const CONTAINER_STYLES = {
  section: "flex items-center justify-center min-h-screen w-full px-4 md:px-[15%] z-20 py-10",
  wrapper: "flex flex-col h-full w-full max-w-laptop mx-auto",
  card: "bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-4",
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