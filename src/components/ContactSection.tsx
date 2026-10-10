import SectionTitle from "@/components/SectionTitle";
import CopyButton from "@/components/common/CopyButton";
import {
  CONTAINER_STYLES,
  REVEAL,
  REVEAL_CHILD,
  socialLinks,
} from "@/utils/constants";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const EMAIL = "neelx2107@gmail.com";

const ContactSection = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="contact"
      {...REVEAL}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="Contact" />

        <div
          className={`${CONTAINER_STYLES.spacing.contentTop} ${CONTAINER_STYLES.spacing.elementGap}`}
        >
          <motion.div
            className="tcard p-6 sm:p-8"
            variants={REVEAL_CHILD}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-auto">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                className="relative"
                variants={REVEAL_CHILD}
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
