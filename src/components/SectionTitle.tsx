import { REVEAL_CHILD } from "@/utils/constants";
import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.div variants={REVEAL_CHILD}>
      <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
