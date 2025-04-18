import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { ANIMATION, CONTAINER_STYLES, COLORS } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";

const experience = [
  {
    title: "Software Development Engineer 1",
    period: "AUG 2024 - Present",
    organization: "FAE Bikes, Bangalore",
    responsibilities: [
      "Enhanced and launched the Retail App on Play Store with improved UI/UX, deep linking, supporting $870,000 yearly transactions and 1000+ daily active users.",
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
    <motion.div
      className={CONTAINER_STYLES.section}
      id="experience"
      {...ANIMATION}
    >
      <div className={CONTAINER_STYLES.wrapper}>
        <SectionTitle number="04" title="Experience" />
        
        <div className="mt-12 space-y-12">
          <div className="relative">
            <div className="absolute left-0 md:left-[50%] h-full w-[2px] bg-[#89bbfe]/20" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 mb-16 last:mb-0`}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute left-[-9px] md:left-[50%] md:ml-[-9px] w-5 h-5 rounded-full bg-[#89bbfe] z-10" />

                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#89bbfe]" />
                      <span className="text-white text-sm">{exp.period}</span>
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
                        <li
                          key={i}
                          className="text-gray-400 text-sm"
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;