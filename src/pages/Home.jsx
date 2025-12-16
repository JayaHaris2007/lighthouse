import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGamepad, FaVideo, FaTrophy } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="text-slate-100">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Simplified Background - removed complex blocking overlays */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 inset-x-0 h-[500px] bg-gold/10 blur-[120px] rounded-full opacity-30"></div>
                </div>

                <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8 relative inline-block group">
                            <div className="absolute inset-0 bg-gold/30 blur-2xl rounded-full group-hover:bg-accent-red/40 transition-all duration-500"></div>
                            <img
                                src="/logo.png"
                                alt="Lighthouse Emblem"
                                className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 drop-shadow-2xl"
                            />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight tracking-wider uppercase text-white drop-shadow-lg">
                            Building <span className="text-gold">Modern Webs</span>.<br />
                            <span className="text-slate-300 text-3xl md:text-5xl mt-2 block font-serif italic lowercase">Creating <span className="text-accent-red decoration-gold underline decoration-2 underline-offset-4">Immersive Games</span></span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto font-serif italic">
                            "A beacon for high-performance web solutions and interactive gaming experiences."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="px-10 py-3 bg-accent-red text-white font-bold rounded-full hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] tracking-widest uppercase text-sm border border-red-500">
                                Contact Us
                            </Link>
                            <Link to="/about" className="px-10 py-3 bg-transparent border border-gold text-gold font-bold rounded-full hover:bg-gold/10 transition-colors tracking-widest uppercase text-sm">
                                Explore Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Showcase */}
            <section className="py-20 bg-navy-light/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Our Services</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gold via-accent-red to-gold mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<FaGamepad size={32} />}
                            title="Game Development"
                            desc="Full-cycle game creation using Unity and Unreal Engine. We build immersive 2D and 3D experiences for PC and console."
                        />
                        <ServiceCard
                            icon={<FaVideo size={32} />}
                            title="Web Development"
                            desc="Modern, responsive websites and web applications built with React, Vite, and TailwindCSS for engaging user experiences."
                        />
                        <ServiceCard
                            icon={<FaTrophy size={32} />}
                            title="Mobile Games"
                            desc="Native and cross-platform mobile game development optimized for performance on iOS and Android devices."
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">What Partners Say</h2>
                        <p className="text-slate-400">Trusted by industry leaders</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Lighthouse built our e-commerce platform with incredible speed and performance."
                            author="Alex Chen"
                            role="CEO, TechMarket"
                        />
                        <TestimonialCard
                            quote="Their game dev team helped us optimize our Unity backend in record time."
                            author="Sarah Jenkins"
                            role="CTO, IndieStudios"
                        />
                        <TestimonialCard
                            quote="The cinematic trailer they produced for our launch was absolutely stunning."
                            author="Marcus Thorne"
                            role="Marketing Lead, Nexus Games"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-navy p-8 rounded-2xl border border-white/5 hover:border-accent-red/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-accent-red/10 text-center group"
        >
            <div className="bg-navy-light w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-accent-red group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">{title}</h3>
            <p className="text-slate-400">{desc}</p>
        </motion.div>
    );
}

function TestimonialCard({ quote, author, role }) {
    return (
        <div className="bg-navy-light/60 p-8 rounded-2xl border border-white/5 relative hover:border-l-4 hover:border-l-accent-red transition-all duration-300">
            <div className="text-gold text-4xl font-serif absolute top-4 left-6 opacity-30">"</div>
            <p className="text-slate-300 italic mb-6 relative z-10 pl-2">"{quote}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-accent-red"></div>
                <div>
                    <h4 className="text-white font-bold text-sm">{author}</h4>
                    <span className="text-gold/80 text-xs uppercase tracking-wider">{role}</span>
                </div>
            </div>
        </div>
    );
}
