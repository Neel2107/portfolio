import { cn } from "@/lib/utils";
import { CONTAINER_STYLES, linkedinUrl, resumeURL } from "@/utils/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CV from "@/components/ui/CV";

const MainContainer = () => {
  const handleImageClick = () => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="about"
      className={`${CONTAINER_STYLES.section} flex-col text-left min-h-screen`}
    >
      <div
        className={cn(
          CONTAINER_STYLES.sectionContent,
          "flex flex-col gap-4 items-start"
        )}
      >
        <div className={"space-y-7"}>
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-full border border-gray-700/20 w-28 h-28"
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
          <div className="flex flex-row gap-2 text-3xl font-bold ">
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="">Hi, I&apos;m Neel Patel —</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-secondary"> Software Engineer</h2>
            </motion.div>
          </div>
          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-neutral-500 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I&apos;m a design-minded, detail-oriented software engineer
            passionate about combining beautiful code with beautiful design to
            create exceptional digital experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant={"outline"} className={"inset-shadow-indigo-500"}>
            <CV />
            <Link target="_blank" rel="noopener noreferrer" href={resumeURL}>
              Resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MainContainer;
