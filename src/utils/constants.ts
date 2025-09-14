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
  section: "flex items-center justify-center ",
  card: "bg-zinc-900 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-4",
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