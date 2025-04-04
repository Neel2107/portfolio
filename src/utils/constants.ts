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
  section: "flex items-center justify-center min-h-screen w-full px-4 md:px-[15%] z-20 py-32",
  wrapper: "flex flex-col h-full w-full max-w-6xl",
  card: "bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all p-6",
};