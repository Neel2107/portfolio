import { motion } from "framer-motion";
import React from "react";

const experience = [
  {
    title: "Software Engineer Intern",
    period: "NOV 2023 - APR 2024",
    organization: "Marketifyall",
    responsibilities: [
      "Built User Interface and REST APIs for various web and mobile apps single-handedly, from scratch.",
      "Created APIs to authorize various social media platforms, resulting in automated social media posts for users.",
      "Transitioned the Firebase backend of the mobile application to Supabase PostgreSQL, leading to a significant decrease of 70% in bandwidth utilization."
    ]
  },
  {
    title: "Frontend Developer Intern",
    period: "FEB 2023 - MAY 2023",
    organization: "The Tecniq Solutions",
    responsibilities: [
      "Created and contributed to a shoe store project, showcasing proficiency in building modern web applications with React and Tailwind CSS.",
      "Improved the page loading speed by 20% by implementing techniques like code splitting, lazy loading, and image optimization by refactoring the codebase.",
      "Developed reusable UI components using ReactJS, ensuring consistency and maintainability across the application."
    ]
  }
];

const Experience = () => {
  return (
    <div className="tw-flex tw-flex-row tw-relative tw-py-[10%] tw-px-[17%] md:tw-px-[17%] " id="education">
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

        {experience.map((education, index) => (
          <motion.div
            key={index}
            className="tw-text-xl tw-mt-5 tw-pl-5 tw-text-left tw-w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.p
              className="tw-py-2 tw-text-[#89bbfe] tw-text-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              {education.title}
            </motion.p>

            <div className="tw-flex tw-w-full tw-flex-row tw-mb-[10px] tw-items-baseline">
              <h4 className="tw-text-[#fed] tw-m-0 tw-pr-[10px] tw-w-max tw-text-sm md:tw-text-base tw-border-r-2 tw-border-[#9c9c9c]">
                {education.period}
              </h4>
              <p className="tw-text-sm md:tw-text-base tw-pl-[10px] tw-w-max tw-text-gray-300">
                {education.organization}
              </p>
            </div>

            <div className="tw-h-[1px] tw-w-full tw-bg-gradient-to-r tw-from-[#cacaca71] tw-to-transparent" />

            <motion.div
              className="tw-flex tw-flex-col tw-text-base tw-leading-10 tw-p-4 tw-w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <ul className="tw-list-disc tw-pl-4">
                {education.responsibilities.map((responsibility, i) => (
                  <motion.li
                    key={i}
                    className="tw-text-[hsla(0,0%,78%,0.68)] tw-text-sm md:tw-text-base tw-w-full md:tw-w-[80%] tw-leading-[30px]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="tw-w-[40%] tw-hidden md:tw-flex tw-flex-col"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          className="tw-hidden md:tw-block lg:tw-h-[60%] tw-object-contain tw-transform tw-scale-x-[-1] tw-mt-20 tw-max-w-[clamp(400px,45%,500px)]"
          src="./Logo.webp"
          alt="Company Logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.img
          className="tw-hidden md:tw-block lg:tw-h-[60%] tw-object-contain tw-transform tw-scale-x-[-1] tw-max-w-[clamp(400px,45%,500px)]"
          src="./experience/user-2.png"
          alt="user-img-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

export default Experience;