import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const ContactSection = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/neelpatel2107/",
      borderColor: "rgb(46, 166, 86)",
      shadowColor: "rgb(46, 166, 86)",
      icon: Linkedin
    },
    {
      name: "GitHub",
      href: "https://github.com/Neel2107",
      borderColor: "rgba(255, 180, 0, 0.51)",
      shadowColor: "rgba(255, 180, 0, 0.51)",
      icon: Github
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/21_neeel/",
      borderColor: "rgba(219, 54, 205, 0.882)",
      shadowColor: "rgba(219, 54, 205, 0.882)",
      icon: Instagram
    },
    {
      name: "Twitter",
      href: "https://twitter.com/notneeel",
      borderColor: "rgba(0, 128, 255, 0.51)",
      shadowColor: "rgba(0, 128, 255, 0.51)",
      icon: Twitter
    }
  ];

  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-w-full tw-py-[5%] tw-px-[15%] md:tw-px-[15%] tw-px-[3%] tw-relative" id="contact">
      <div className="tw-flex tw-w-full">
        <motion.div
          className="tw-flex tw-flex-col tw-items-center tw-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="tw-text-[#89bbfe] tw-text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            05. What's Next?
          </motion.span>

          <motion.span
            className="tw-text-[#89bbfe] md:tw-text-5xl tw-text-2xl tw-font-semibold tw-mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get In Touch
          </motion.span>

          <motion.p
            className="tw-text-[hsla(0,0%,78%,.68)] md:tw-text-lg tw-text-sm tw-my-[3%] md:tw-max-w-[50%] tw-max-w-[75%] tw-py-[2%] tw-text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With my extensive experience in mobile and web development, including React Native and NestJS, I am excited to bring my skills to new challenges and contribute to impactful projects as a developer for the company.
          </motion.p>

          <motion.div
            className="tw-flex tw-justify-between md:tw-w-[50%] tw-w-[75%] tw-py-[2%]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className="tw-bg-[#0e1f34] tw-rounded-lg tw-cursor-pointer tw-mix-blend-overlay md:tw-p-6 tw-p-2"
                  style={{
                    border: `2px solid ${social.borderColor}`,
                    boxShadow: `${social.shadowColor} 1px 5px 40px`
                  }}
                >
                  {React.createElement(social.icon, {
                    className: "md:tw-w-10 md:tw-h-10 tw-w-4 tw-h-4",
                    strokeWidth: 1
                  })}
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="tw-border tw-border-[#89bbfe] tw-rounded-lg tw-text-[hsla(0,0%,78%,.68)] tw-text-sm tw-mt-5 tw-py-4 tw-px-12 tw-text-center tw-no-underline tw-w-max hover:tw-bg-[rgba(0,255,255,0.1)] hover:tw-shadow-[0_5px_20px_3px_#89bcfe43] hover:tw-text-white tw-transition-all tw-duration-500 tw-flex tw-items-center tw-gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Say Hello! <Mail className="tw-w-4 tw-h-4" />
          </motion.a>

          <motion.span
            className="tw-self-end tw-text-[#fed] tw-text-sm tw-tracking-wider tw-mt-[7%] tw-mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Made with <span>❤️</span> by
          </motion.span>

          <motion.span
            className="tw-font-['Satisfy'] tw-text-3xl tw-mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Nova
          </motion.span>
        </motion.div>
      </div>

      <motion.button
        onClick={handleButtonClick}
        className="tw-w-[140px] tw-h-[56px] tw-overflow-hidden tw-border-none tw-text-white tw-bg-transparent tw-absolute tw-bottom-[5%] tw-right-[10%] tw-cursor-pointer md:tw-block tw-hidden hover:before:tw-scale-x-100 before:tw-content-[''] before:tw-absolute before:tw-h-[2px] before:tw-bottom-0 before:tw-left-0 before:tw-w-full before:tw-scale-x-0 before:tw-origin-bottom-right before:tw-bg-current before:tw-transition-transform before:tw-duration-300 before:tw-ease-out before:hover:tw-origin-bottom-left"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="tw-absolute tw-w-full tw-h-full tw-flex group">
          <span className="tw-opacity-100 tw-text-xl tw-ml-1 tw-transition-all tw-duration-200 group-hover:tw-transform group-hover:-tw-translate-y-[60px]">Back</span>
          <span className="tw-opacity-100 tw-text-xl tw-ml-1 tw-transition-all tw-duration-200 group-hover:tw-transform group-hover:-tw-translate-y-[60px]">to</span>
          <span className="tw-opacity-100 tw-text-xl tw-ml-1 tw-transition-all tw-duration-200 group-hover:tw-transform group-hover:-tw-translate-y-[60px]">top</span>
        </div>
        <div className="tw-absolute tw-w-full tw-h-full tw-flex">
          <span className="tw-opacity-100 tw-text-xl tw-ml-1 tw-translate-y-[60px] group-hover:tw-translate-y-0 tw-transition-all tw-duration-200">Back</span>
          <span className="tw-opacity-100 tw-text-xl tw-ml-1 tw-translate-y-[60px] group-hover:tw-translate-y-0 tw-transition-all tw-duration-200">to</span>
          <span className="tw-opacity-100 tw-text-xl tw-ml-1 tw-translate-y-[60px] group-hover:tw-translate-y-0 tw-transition-all tw-duration-200">top</span>
        </div>
        <motion.svg
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="tw-h-6 tw-w-6 tw-absolute tw-right-0 tw-top-1/2 -tw-translate-y-1/2 -tw-rotate-50 tw-transition-transform tw-duration-200 group-hover:-tw-rotate-90 group-hover:tw-translate-y-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default ContactSection;