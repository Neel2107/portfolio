import CV from "@/components/svgs/CV";
import { cn } from "@/lib/utils";
import {
  CONTAINER_STYLES,
  ENTER_CHILD,
  ENTER_CONTAINER,
  linkedinUrl,
  resumeURL,
} from "@/utils/constants";
import { motion } from "motion/react";
import Image from "next/image";

const MainContainer = () => {
  const handleImageClick = () => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="about"
      className={`${CONTAINER_STYLES.section} flex-col text-left min-h-screen`}
      variants={ENTER_CONTAINER}
      initial="initial"
      animate="visible"
    >
      <div
        className={cn(
          CONTAINER_STYLES.sectionContent,
          "flex flex-col gap-4 items-start"
        )}
      >
        <div className="space-y-7">
          <motion.div
            className="rounded-full border border-gray-700/20 w-28 h-28"
            variants={ENTER_CHILD}
          >
            <Image
              src="/neel-profile.webp"
              alt="Neel Patel"
              width={200}
              height={200}
              className="rounded-full cursor-pointer"
              onClick={handleImageClick}
            />
          </motion.div>
          <div className="flex flex-row gap-2 text-xl sm:text-3xl font-bold mb-1">
            {/* Greeting */}
            <motion.span
              className="inline-flex items-center"
              variants={ENTER_CHILD}
            >
              Hi, I&apos;m Neel Patel —
            </motion.span>

            {/* Title */}
            <motion.h3 className="text-secondary" variants={ENTER_CHILD}>
              Software Engineer
            </motion.h3>
          </div>
          {/* Description */}
          <motion.p
            className="text-base sm:text-xl text-secondary max-w-2xl leading-relaxed"
            variants={ENTER_CHILD}
          >
            I create value at the intersection of technology and business.
          </motion.p>
        </div>

        <motion.div variants={ENTER_CHILD}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={resumeURL}
            className="btn-pill btn-pill--secondary"
          >
            <CV />
            Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainContainer;
