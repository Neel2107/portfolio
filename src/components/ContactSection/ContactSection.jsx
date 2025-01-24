import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

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
    <div className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-32" id="contact">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SectionTitle number="05" title="What's Next?" />

          <div className="relative">

            <motion.div
              className="relative flex flex-col md:flex-row gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >


              <div className="w-full md:w-[45%]  md:pl-16">
                <motion.div
                  className="bg-[#0e1f34]/30 backdrop-blur-sm p-8 rounded-lg border border-[#89bbfe]/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-[#89bbfe] text-3xl md:text-4xl font-bold mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    With my extensive experience in mobile and web development, I'm ready to contribute to your next big project.
                  </p>
                  <motion.a
                    href="mailto:neelpatel805804@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0e1f34] border border-[#89bbfe]/20 text-[#89bbfe] font-medium rounded-lg hover:bg-[#89bbfe]/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Say Hello! <Mail className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Social Links Grid */}
              <div className="w-full md:w-[45%]  md:pr-16">
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#0e1f34]/30 backdrop-blur-sm p-4 rounded-lg border border-[#89bbfe]/20 hover:border-[#89bbfe]/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
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

          {/* Footer */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤️</span> by
            </p>
            <p className="font-['Satisfy'] text-2xl text-[#89bbfe] mt-1">Nova</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;