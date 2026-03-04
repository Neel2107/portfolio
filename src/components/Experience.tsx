import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { ANIMATION, CONTAINER_STYLES } from "@/utils/constants";
import { experience } from "@/utils/constants/experience";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Website from "@/components/svgs/Website";
import { useCallback, useState } from "react";

const Experience = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = useCallback((index: number) => {
    setOpenItems((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  }, []);

  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="experience"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Experience" />

        <div className={CONTAINER_STYLES.spacing.contentTop}>
          <div className="">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-6 last:mb-0"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {(() => {
                  const isOpen = openItems.has(index);
                  const triggerId = `experience-trigger-${index}`;
                  const contentId = `experience-content-${index}`;

                  return (
                    <div className="overflow-hidden rounded-2xl border border-primary/10 bg-background/40 dark:bg-zinc-900/10">
                      <div
                        id={triggerId}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => toggleItem(index)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            toggleItem(index);
                          }
                        }}
                        className={cn(
                          "group w-full text-left p-4 sm:p-5 transition-all duration-200 hover:bg-primary/[0.03] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                          isOpen
                            ? "rounded-t-2xl rounded-b-none bg-primary/[0.02] pb-4"
                            : "rounded-2xl"
                        )}
                      >
                        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-start md:justify-between">
                          <div className="flex flex-row gap-5">
                            <div className="flex items-center justify-center size-14 rounded-lg p-2 bg-white dark:bg-zinc-100 ring-1 ring-zinc-300/70 dark:ring-zinc-700/70 shadow-sm">
                              <Image
                                src={exp.logo}
                                alt={`${exp.organization} logo`}
                                width={36}
                                height={36}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="flex flex-row gap-2 items-center">
                                <span className="text-primary font-semibold text-lg">
                                  {exp.organization}
                                </span>
                                <Link
                                  href={exp.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Visit ${exp.organization} website`}
                                  onClick={(event) => event.stopPropagation()}
                                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                >
                                  <Website className="size-4 text-secondary" />
                                </Link>
                              </div>

                              <h3 className="text-primary text-base font-normal">
                                {exp.title}
                              </h3>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 md:text-right">
                            <span className="text-accent-foreground text-base font-light">
                              {exp.period}
                            </span>
                            <span className="text-accent-foreground text-base font-light">
                              {exp.location}
                            </span>
                          </div>
                        </div>

                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            key={contentId}
                            id={contentId}
                            role="region"
                            aria-labelledby={triggerId}
                            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              filter: "blur(0px)",
                            }}
                            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                            transition={{
                              duration: 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 pb-6 pt-3">
                              <ul className="list-disc pl-4 space-y-2">
                                {exp.responsibilities.map((responsibility, i) => (
                                  <motion.li
                                    key={i}
                                    className="text-secondary text-base"
                                    initial={{ opacity: 0, y: 2, filter: "blur(2px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{
                                      duration: 0.2,
                                      delay: i * 0.03,
                                      ease: [0.22, 1, 0.36, 1],
                                    }}
                                  >
                                    {responsibility}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
