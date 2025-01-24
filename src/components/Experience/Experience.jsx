import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const experience = [
  {
    title: "Software Development Engineer 1",
    period: "AUG 2024 - Present",
    organization: "FAE Bikes, Bangalore",
    responsibilities: [
      "Enhanced and launched the Retail App on Play Store with improved UI/UX, deep linking, supporting 60 lakh+ monthly transactions and 1000+ daily active users.",
      "Designed and built Internal Operations App flows in React Native, supporting 20+ daily deployments and 55+ services with features like in-app media capture and PDF generation.",
      "Led development of Leads Management System, boosting customer acquisition by 40%, handled REST API integrations, and implemented role-based access control."
    ]
  },
  {
    title: "Software Development Engineer Intern",
    period: "MAY 2024 - AUG 2024",
    organization: "FAE Bikes, Bangalore",
    responsibilities: [
      "Developed MVP of Retail App using React Native and Expo, integrating OTP-based login and Razorpay for secure transactions.",
      "Created MVP of Internal Operations App with features like in-app image capture, JWT authorization, and AWS S3 integration.",
      "Initiated Dashboard development with 10+ modules using Next.js for asset management and analytics."
    ]
  },
  {
    title: "Software Engineer Intern",
    period: "NOV 2023 - APR 2024",
    organization: "Marketifyall",
    responsibilities: [
      "Built User Interface and REST APIs for various web and mobile apps single-handedly, from scratch.",
      "Created APIs to authorize various social media platforms, resulting in automated social media posts for users.",
      "Transitioned the Firebase backend to Supabase PostgreSQL, reducing bandwidth utilization by 70%."
    ]
  },
  {
    title: "Frontend Developer Intern",
    period: "FEB 2023 - MAY 2023",
    organization: "The Tecniq Solutions",
    responsibilities: [
      "Created and contributed to a shoe store project using React and Tailwind CSS.",
      "Improved page loading speed by 20% through code splitting and optimization.",
      "Developed reusable UI components ensuring consistency and maintainability."
    ]
  }
];

const Experience = () => {
    return (
        <div className="py-32 px-4 md:px-[17%]" id="education">
            <motion.div
                className="flex flex-col w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <SectionTitle number="04" title="Experience" />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-[50%] h-full w-[2px] bg-[#89bbfe]/20" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 mb-16 last:mb-0 `}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-9px] md:left-[50%] md:ml-[-9px] w-5 h-5 rounded-full bg-[#89bbfe] z-10" />

                            {/* Content */}
                            <div className={`w-full md:w-[45%] pl-8 md:pl-0  ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                <motion.div
                                    className="bg-[#0e1f34]/30 backdrop-blur-sm p-6 rounded-lg border border-[#89bbfe]/20 hover:border-[#89bbfe]/40 "
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                      <Calendar className="w-4 h-4 text-[#89bbfe]" />
                                      <span className="text-[#fed] text-sm">{exp.period}</span>
                                    </div>

                                    <h3 className="text-[#89bbfe] text-xl font-medium mb-2">
                                      {exp.title}
                                    </h3>

                                    <div className="flex items-center gap-2 mb-4">
                                      <Building2 className="w-4 h-4 text-gray-400" />
                                      <span className="text-gray-400 text-sm">{exp.organization}</span>
                                    </div>

                                    <ul className="list-disc pl-4 space-y-2">
                                      {exp.responsibilities.map((responsibility, i) => (
                                        <motion.li
                                          key={i}
                                          className="text-[hsla(0,0%,78%,0.68)] text-sm"
                                          initial={{ opacity: 0, x: -20 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                                        >
                                          {responsibility}
                                        </motion.li>
                                      ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;