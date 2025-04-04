import { motion, useScroll, useSpring } from "framer-motion";
import { COLORS } from "../../utils/constants";

const LoadingBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#89bbfe] origin-left z-[1001]"
      style={{ scaleX }}
    />
  );
};

export default LoadingBar;