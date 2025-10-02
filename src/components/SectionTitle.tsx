import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className=" text-2xl md:text-3xl font-bold whitespace-nowrap">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
