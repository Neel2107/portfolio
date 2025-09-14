import { motion } from "motion/react";
import { useRef } from "react";



const ParallaxBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={bgRef}
      className="parallax-bg fixed inset-0 z-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(137, 187, 254, 0.2) 0%, transparent 50%), 
                          radial-gradient(circle at 75% 75%, rgba(137, 187, 254, 0.2) 0%, transparent 50%)`,
        backgroundSize: "100% 100%",
      }}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    />
  );
};

export default ParallaxBackground;