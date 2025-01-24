import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const ContactSection = () => {


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
    <div className="flex items-center justify-center min-h-screen w-full py-4 md:px-[15%] px-[3%] relative" id="contact">
      <div className="flex w-full">
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-[#89bbfe] text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            05. What's Next?
          </motion.span>

          <motion.span
            className="text-[#89bbfe] md:text-5xl text-2xl font-semibold mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get In Touch
          </motion.span>

          <motion.p
            className="text-[hsla(0,0%,78%,.68)] md:text-lg text-sm my-[3%] md:max-w-[50%] max-w-[75%] py-[2%] text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With my extensive experience in mobile and web development, including React Native and NestJS, I am excited to bring my skills to new challenges and contribute to impactful projects as a developer for the company.
          </motion.p>

          <motion.div
            className="flex justify-between md:w-[50%] w-[75%] py-[2%]"
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
                  className="bg-[#0e1f34] rounded-lg cursor-pointer mix-blend-overlay md:p-6 p-2"
                  style={{
                    border: `2px solid ${social.borderColor}`,
                    boxShadow: `${social.shadowColor} 1px 5px 40px`
                  }}
                >
                  {React.createElement(social.icon, {
                    className: "md:w-10 md:h-10 w-4 h-4",
                    strokeWidth: 1
                  })}
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="border border-[#89bbfe] rounded-lg text-[hsla(0,0%,78%,.68)] text-sm mt-5 py-4 px-12 text-center no-underline w-max hover:bg-[rgba(0,255,255,0.1)] hover:shadow-[0_5px_20px_3px_#89bcfe43] hover:text-white transition-all duration-500 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Say Hello! <Mail className="w-4 h-4" />
          </motion.a>

          <motion.span
            className="self-end text-[#fed] text-sm tracking-wider mt-[7%] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Made with <span>❤️</span> by
          </motion.span>

          <motion.span
            className="font-['Satisfy'] text-3xl mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Nova
          </motion.span>
        </motion.div>
      </div>


    </div>
  );
};

export default ContactSection;