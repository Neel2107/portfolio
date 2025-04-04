import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed w-6 h-6 pointer-events-none z-[1002]"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
    >
      <div className="w-full h-full rounded-full border-2 border-[#89bbfe]" />
    </motion.div>
  );
};

export default CustomCursor;