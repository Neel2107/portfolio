import SectionTitle from "@/components/SectionTitle";
import { ANIMATION, CONTAINER_STYLES } from "@/utils/constants";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/neelpatel2107/",
      icon: Linkedin,
      color: "#0A66C2",
      description: "Connect with me professionally"
    },
    {
      name: "GitHub",
      href: "https://github.com/Neel2107",
      icon: Github,
      color: "#f0b400",
      description: "Check out my code repositories"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/21_neeel/",
      icon: Instagram,
      color: "#E4405F",
      description: "Follow my creative journey"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/notneeel",
      icon: Twitter,
      color: "#1DA1F2",
      description: "Stay updated with my thoughts"
    }
  ];

  return (
    <motion.div
      className={CONTAINER_STYLES.section}
      id="contact"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle number="05" title="What's Next?" />

        <div className={CONTAINER_STYLES.spacing.contentTop}>
          <motion.div
            className="flex flex-col md:flex-row gap-8"
            {...ANIMATION}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full md:w-1/2">
              <motion.div
                className="bg-zinc-900 p-8 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all h-full shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(137, 187, 254, 0.1)" }}
              >
                <h3 className="text-[#89bbfe] text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  With my extensive experience in mobile and web development, I&apos;m ready to contribute to your next big project.
                </p>
                <motion.a
                  href="mailto:neelpatel805804@gmail.com"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors duration-300 group"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 4px 12px rgba(26, 26, 26, 0.3)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative">Say Hello!</span>
                  <Mail className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4 h-full">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-6 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <social.icon className="w-6 h-6 text-[#89bbfe] mb-3" />
                    <h4 className="text-white font-medium mb-1">{social.name}</h4>
                    <p className="text-gray-400 text-sm">{social.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;