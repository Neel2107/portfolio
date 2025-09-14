import { Code2, Rocket, Server, Star, Users } from "lucide-react";
import { motion } from "motion/react";
import { CONTAINER_STYLES } from "../../utils/constants";
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
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div >
                <SectionTitle number="01" title="About Me" />

                <div className="space-y-12">
                    <motion.div
                        className="text-center space-y-6"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >

                        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            A Software Development Engineer passionate about creating impactful digital experiences. At FAE Bikes, I lead the development of mission-critical applications, combining technical expertise with a keen eye for user experience.
                        </p>

                        
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-900 p-6 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="space-y-4">
                                    <div className="p-3 bg-[#89bbfe]/10 rounded-lg w-fit">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
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