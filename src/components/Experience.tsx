import SectionTitle from "@/components/SectionTitle";
import { ANIMATION, CONTAINER_STYLES } from "@/utils/constants";
import { Building2, Calendar } from "lucide-react";
import { motion } from "motion/react";

const experience = [
  {
    title: "Software Development Engineer",
    period: "JUN 2025 - Present",
    organization: "Sarvam AI, Bangalore",
    responsibilities: [
      "Working with Arya team on enterprise software, revamped main product with better UX leading to multiple client offer acquisitions.",
      "Revamped chat application architecture resulting in 30% performance improvement and enhanced user experience.",
      "Led mobile app transformation from vibe-coded demo to production-ready application with robust architecture and scalability.",
      "Created Authoring UI for internal and FDSE teams to orchestrate task graphs - complex networks of interconnected agent nodes for workflow automation."
    ]
  },
  {
    title: "Software Development Engineer 1",
    period: "AUG 2024 - JUN 2025",
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
      <div className={CONTAINER_STYLES.sectionContent}>
        <SectionTitle number="04" title="Experience" />

        <div className={CONTAINER_STYLES.spacing.contentTop}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-[2px] bg-[#89bbfe]/20" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] sm:left-1.5 w-5 h-5 rounded-full bg-[#89bbfe] z-10 flex-shrink-0" />

                {/* Content */}
                <div className="w-full  pl-7 sm:pl-12">
                  <motion.div
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
                        <motion.li
                          key={i}
                          className="text-gray-400 text-sm"
                          initial={{ opacity: 0, filter: "blur(4px)" }}
                          whileInView={{ opacity: 1, filter: "blur(0px)" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1 + i * 0.1
                          }}
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
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;