import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const LoadingBar = () => {
  const { scrollYProgress } = useScroll();
  // Transform scrollYProgress to max out at 0.99 (99%)
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [0, 0.99]);
  const scaleX = useSpring(transformedProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#89bbfe] origin-left z-[1001] "
      style={{ scaleX }}
    />
  );
};

export default LoadingBar;