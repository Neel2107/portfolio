import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Code2, Rocket, Server, Star, Users, Zap } from "lucide-react";

const AboutMeSection = () => {
    const stats = [
        { icon: <Users className="w-5 h-5" />, value: "1000+", label: "Daily Users" },
        { icon: <Zap className="w-5 h-5" />, value: "60L+", label: "Transactions" },
        { icon: <Star className="w-5 h-5" />, value: "40%", label: "Growth" }
    ];

    const highlights = [
        {
            icon: <Code2 className="w-6 h-6 text-[#89bbfe]" />,
            title: "Frontend Specialist",
            description: "Crafting responsive and intuitive user interfaces with React Native and Next.js"
        },
        {
            icon: <Server className="w-6 h-6 text-[#89bbfe]" />,
            title: "High-Impact Solutions",
            description: "Building applications that handle $870K+ yearly transactions"
        },
        {
            icon: <Rocket className="w-6 h-6 text-[#89bbfe]" />,
            title: "Performance Focused",
            description: "Optimizing for scalability and exceptional user experience"
        }
    ];

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen w-full px-4 md:px-[15%] z-20 py-32"
            id="about"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col h-full w-full max-w-6xl">
                <SectionTitle number="01" title="About Me" />

                <div className="mt-12 space-y-12">
                    <motion.div
                        className="text-center space-y-6"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="text-[#89bbfe]">Bonjour! </span>
                            I'm Neel Patel
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            A Software Development Engineer passionate about creating impactful digital experiences. At FAE Bikes, I lead the development of mission-critical applications, combining technical expertise with a keen eye for user experience.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-8 mt-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 bg-[#1a1a1a]/50 px-6 py-3 rounded-full border border-gray-800"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="p-2 bg-[#89bbfe]/10 rounded-full text-[#89bbfe]">
                                        {stat.icon}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                                        <span className="text-gray-400">{stat.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                                className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#89bbfe]/50 transition-all"
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