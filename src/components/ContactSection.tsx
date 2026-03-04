import SectionTitle from "@/components/SectionTitle";
import CopyEmailButton from "@/components/common/CopyEmailButton";
import { ANIMATION, CONTAINER_STYLES, socialLinks } from "@/utils/constants";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="contact"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Contact" />

        <div
          className={`${CONTAINER_STYLES.spacing.contentTop} ${CONTAINER_STYLES.spacing.elementGap}`}
        >
          <motion.div
            className="bg-background dark:bg-zinc-900/20 p-6 sm:p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-primary text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-secondary text-base leading-relaxed sm:max-w-xl">
                With my extensive experience in mobile and web development,
                I&apos;m ready to contribute to your next big project.
              </p>
              <CopyEmailButton email="neelx2107@gmail.com" />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-auto"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background dark:bg-zinc-900/20 p-6 sm:p-8 rounded-xl border border-primary/10 hover:border-primary/20 transition-all"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="text-primary font-semibold mb-1">
                  {social.name}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {social.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
