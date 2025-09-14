import { Code2, Rocket, Server } from "lucide-react";
import { motion } from "motion/react";
import { ANIMATION, CONTAINER_STYLES } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutMeSection = () => {
    const highlights = [
        {
            icon: <Code2 className="w-6 h-6 text-[#89bbfe]" />,
            title: "Frontend Engineer",
            description: "Crafting responsive and intuitive user interfaces with React Native and Next.js"
        },
        {
            icon: <Server className="w-6 h-6 text-[#89bbfe]" />,
            title: "High-Impact Solutions",
            description: "Leading development of mission-critical applications handling $870K+ yearly transactions"
        },
        {
            icon: <Rocket className="w-6 h-6 text-[#89bbfe]" />,
            title: "Performance Focused",
            description: "Single-handedly built and optimized for scalability and exceptional user experience"
        }
    ];

    return (
        <motion.div
            className={CONTAINER_STYLES.section}
            id="about"
            {...ANIMATION}
        >
            <div>
                <SectionTitle number="01" title="About Me" />

                <div className="mt-12 space-y-16">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            At Sarvam AI, I lead the development of mission-critical applications, combining technical
                            expertise with a keen eye for user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-900 p-6 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all h-full"
                                initial={{ opacity: 0, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 8px 16px rgba(137, 187, 254, 0.1)"
                                }}
                            >
                                <div className="space-y-4">
                                    <div className="p-3 bg-[#89bbfe]/10 rounded-lg w-fit">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-[#89bbfe] text-lg font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMeSection;