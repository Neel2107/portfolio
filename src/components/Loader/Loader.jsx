import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black/90 tw-backdrop-blur-sm tw-z-50">
      <motion.div 
        className="tw-flex tw-flex-col tw-items-center tw-gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="tw-flex tw-gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="tw-w-4 tw-h-4 tw-bg-[#89bbfe] tw-rounded-full"
              animate={{
                y: [-10, 0, -10],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <motion.p 
          className="tw-text-[#89bbfe] tw-text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;