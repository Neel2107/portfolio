import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  
  // Enhanced depth transformations
  const y1 = useTransform(scrollY, [0, 1500], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1500], [100, -150]);
  const y3 = useTransform(scrollY, [0, 1500], [200, -100]);
  
  const scale1 = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const scale2 = useTransform(scrollY, [0, 1000], [0.8, 1]);
  const scale3 = useTransform(scrollY, [0, 1000], [1.2, 0.9]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Foreground layer */}
      <motion.div
        className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-[#89bbfe]/15 blur-3xl"
        style={{ 
          y: y1,
          scale: scale1,
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Middle layer */}
      <motion.div
        className="absolute top-40 right-[15%] w-48 h-48 rounded-full bg-[#89bbfe]/10 blur-[80px]"
        style={{ 
          y: y2,
          scale: scale2,
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Background layer */}
      <motion.div
        className="absolute top-[60%] left-[20%] w-56 h-56 rounded-full bg-[#89bbfe]/5 blur-[100px]"
        style={{ 
          y: y3,
          scale: scale3,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Deep background layer */}
      <motion.div
        className="absolute bottom-[20%] right-[25%] w-64 h-64 rounded-full bg-[#89bbfe]/3 blur-[120px]"
        style={{ 
          y: y3,
          scale: scale2,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

export default ParallaxBackground;