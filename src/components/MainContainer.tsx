import { Button } from "@/components/ui/button";
import CV from "@/components/svgs/CV";
import { cn } from "@/lib/utils";
import { CONTAINER_STYLES, linkedinUrl, resumeURL } from "@/utils/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MainContainer = () => {
  const handleImageClick = () => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="about"
      className={`${CONTAINER_STYLES.section} flex-col text-left min-h-screen`}
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={cn(
          CONTAINER_STYLES.sectionContent,
          "flex flex-col gap-4 items-start"
        )}
      >
        <motion.div
          className={"space-y-7"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="rounded-full border border-gray-700/20 w-28 h-28"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I&apos;m Neel Patel —
            </motion.span>

            {/* Title */}
            <motion.h3  
              className="text-secondary"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Software Engineer
            </motion.h3>
          </div>
          {/* Description */}
          <motion.p
            className="text-base sm:text-xl text-secondary max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I create value at the intersection of technology and business.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button variant={"outline"} className={"inset-shadow-indigo-500"}>
            <CV />
            <Link target="_blank" rel="noopener noreferrer" href={resumeURL}>
              Resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainContainer;
