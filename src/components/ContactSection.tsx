import SectionTitle from "@/components/SectionTitle";
import { ANIMATION, CONTAINER_STYLES, socialLinks } from "@/utils/constants";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="contact"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle title="What's Next?" />

        <div
          className={`${CONTAINER_STYLES.spacing.contentTop} ${CONTAINER_STYLES.spacing.elementGap}`}
        >
          <motion.div
            className="bg-zinc-900 p-8 sm:p-10 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all shadow-xl  mx-auto"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-primary text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed sm:max-w-xl">
                With my extensive experience in mobile and web development,
                I&apos;m ready to contribute to your next big project.
              </p>
              <motion.a
                href="mailto:neelpatel805804@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/50 px-6 py-3 font-semibold text-black shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 24px rgba(137, 187, 254, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="whitespace-nowrap">Say Hello!</span>
                <Mail className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
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
                className="bg-zinc-900 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <social.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="text-white font-semibold mb-1">{social.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
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
