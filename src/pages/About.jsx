import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">About Us</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Discover the story behind Lighthouse Production, the team building the future of web and gaming.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold/20 transition-all"></div>
                        <h2 className="text-3xl font-bold text-gold mb-4 font-heading">Our Mission</h2>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            To empower businesses and gamers alike by delivering cutting-edge web platforms and immersive gaming experiences that push the boundaries of creativity.
                        </p>
                    </div>
                    <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent-red/20 transition-all"></div>
                        <h2 className="text-3xl font-bold text-accent-red mb-4 font-heading">Our Vision</h2>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            To be the global beacon for digital innovation, setting the gold standard in full-stack web development and interactive game design.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-heading text-center mb-12 text-white">Meet The Team</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl glass-card hover:-translate-y-2 transition-all duration-300 border-transparent hover:border-gold/30 hover:shadow-gold/10 hover:shadow-2xl"
                            >
                                <div className="aspect-w-3 aspect-h-4 bg-navy-light h-64 w-full relative overflow-hidden">
                                    {/* Placeholder image logic: Using a gradient/icon if no image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                        <span className="text-5xl text-white/10 font-bold font-heading group-hover:text-gold/20 transition-colors">{member.name.charAt(0)}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
                                </div>
                                <div className="p-4 text-center absolute bottom-0 inset-x-0 pb-6 pt-12 bg-gradient-to-t from-navy to-transparent">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                                    <p className="text-xs font-bold text-accent-red uppercase tracking-widest">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const teamMembers = [
    { name: 'Jaya Haris', role: 'Full Stack Developer' },
    { name: 'Nihal', role: 'Frontend Developer' },
    { name: 'Praveen', role: 'Game Developer' },
    { name: 'Sanjay', role: 'Game Developer' },
    { name: 'Siva Priyan', role: 'Game Developer' },
];
