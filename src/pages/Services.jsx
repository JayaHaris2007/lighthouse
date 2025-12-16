import { motion } from 'framer-motion';
import { FaGamepad, FaVideo, FaTrophy, FaCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaGamepad />,
            title: "Game Development",
            desc: "Full-cycle game creation using Unity and Unreal Engine. We build immersive 2D and 3D experiences for PC and console."
        },
        {
            icon: <FaDesktop />,
            title: "Web Development",
            desc: "Modern, responsive websites and web applications built with React, Vite, and TailwindCSS for engaging user experiences."
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Games",
            desc: "Native and cross-platform mobile game development optimized for performance on iOS and Android devices."
        },
        {
            icon: <FaCode />,
            title: "Full Stack Solutions",
            desc: "Robust backend infrastructure, API development, and database integration using Firebase and Node.js."
        },
        {
            icon: <FaVideo />, // Using Video icon for UI/UX Animation as closest fit or maybe specialized icon
            title: "Frontend UI/UX",
            desc: "Creating smooth, animated interfaces with Framer Motion and custom design systems for web and games."
        },
        {
            icon: <FaTrophy />, // Keeping trophy for 'Game Design' / Mechanics
            title: "Game Design",
            desc: "Mechanics balancing, level design, and system architecture to ensure rewarding gameplay loops."
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Our Services</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Comprehensive solutions for Modern Web Applications and High-Fidelity Game Development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-navy-light p-8 rounded-xl border border-white/5 hover:border-gold transition-colors group"
                        >
                            <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-gold text-2xl mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
