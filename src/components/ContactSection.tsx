import SectionTitle from "@/components/SectionTitle";
import CopyButton from "@/components/common/CopyButton";
import { ANIMATION, CONTAINER_STYLES, socialLinks } from "@/utils/constants";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const EMAIL = "neelx2107@gmail.com";

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
            className="tcard p-6 sm:p-8"
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
              <CopyButton
                text={EMAIL}
                label="Say Hello!"
                icon={Mail}
                ariaLabel="Copy email address"
                tooltipText="Copy email"
                fallbackHref={`mailto:${EMAIL}`}
                className="self-start"
              />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-auto"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                className="relative"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tcard block p-6 sm:p-8"
                >
                  <social.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-primary font-semibold mb-1">
                    {social.name}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {social.description}
                  </p>
                </a>
                {/* Sits outside the anchor so copying never navigates. */}
                <CopyButton
                  text={social.href}
                  ariaLabel={`Copy ${social.name} link`}
                  className="absolute right-4 top-4 sm:right-5 sm:top-5"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
