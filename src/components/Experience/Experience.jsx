import { motion } from "framer-motion";
import React from "react";
import { Calendar, Building2 } from "lucide-react";

const experience = [
  {
    title: "Software Development Engineer 1",
    period: "AUG 2024 - Present",
    organization: "Faebikes, Bangalore",
    responsibilities: [
      "Enhanced and launched the Retail App on Play Store with improved UI/UX, deep linking, supporting 60 lakh+ monthly transactions and 1000+ daily active users.",
      "Designed and built Internal Operations App flows in React Native, supporting 20+ daily deployments and 55+ services with features like in-app media capture and PDF generation.",
      "Led development of Leads Management System, boosting customer acquisition by 40%, handled REST API integrations, and implemented role-based access control."
    ]
  },
  {
    title: "Software Development Engineer Intern",
    period: "MAY 2024 - AUG 2024",
    organization: "Faebikes, Bangalore",
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
    <div className="tw-py-[10%] tw-px-[5%] md:tw-px-[17%]" id="education">
      <motion.div
        className="tw-flex tw-flex-col tw-w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="tw-flex tw-items-center tw-pb-[30px] tw-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="tw-text-[#fed] md:tw-text-[1.875em] tw-text-[1.3rem] tw-font-semibold tw-tracking-[2px] tw-mr-[10px] tw-flex tw-items-center">
            <span className="tw-text-[#89bbfe] md:tw-text-[1.438em] tw-text-[1.3rem] tw-mr-[10px]">04.</span>
            Experience
          </h2>
          <div className="tw-h-[1px] tw-bg-[#003b5d] tw-w-[30%]" />
        </motion.div>

        <div className="tw-relative">
          {/* Timeline line */}
          <div className="tw-absolute tw-left-0 md:tw-left-[50%] tw-h-full tw-w-[2px] tw-bg-[#89bbfe]/20" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`tw-relative tw-flex tw-flex-col md:tw-flex-row ${
                index % 2 === 0 ? 'md:tw-flex-row-reverse' : ''
              } tw-gap-8 tw-mb-16`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="tw-absolute tw-left-[-9px] md:tw-left-[50%] md:tw-ml-[-9px] tw-w-5 tw-h-5 tw-rounded-full tw-bg-[#89bbfe] tw-z-10" />

              {/* Content */}
              <div className={`tw-w-full md:tw-w-[45%] tw-pl-8 md:tw-pl-0 ${
                index % 2 === 0 ? 'md:tw-pr-16' : 'md:tw-pl-16'
              }`}>
                <motion.div
                  className="tw-bg-[#0e1f34]/30 tw-backdrop-blur-sm tw-p-6 tw-rounded-lg tw-border tw-border-[#89bbfe]/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                    <Calendar className="tw-w-4 tw-h-4 tw-text-[#89bbfe]" />
                    <span className="tw-text-[#fed] tw-text-sm">{exp.period}</span>
                  </div>
                  
                  <h3 className="tw-text-[#89bbfe] tw-text-xl tw-font-medium tw-mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mb-4">
                    <Building2 className="tw-w-4 tw-h-4 tw-text-gray-400" />
                    <span className="tw-text-gray-400 tw-text-sm">{exp.organization}</span>
                  </div>

                  <ul className="tw-list-disc tw-pl-4 tw-space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        className="tw-text-[hsla(0,0%,78%,0.68)] tw-text-sm"
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