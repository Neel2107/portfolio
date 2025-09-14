import { motion } from "motion/react";
import { useRef } from "react";



const ParallaxBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={bgRef}
      className="parallax-bg fixed inset-0 z-0 opacity-30 pointer-events-none bg-blur-orb"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    />
  );
};

export default ParallaxBackground;