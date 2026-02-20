

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTimes } from 'react-icons/fa';

export default function About() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        const q = query(collection(db, 'team'), orderBy('createdAt', 'asc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const members = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTeamMembers(members);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

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
                    {loading ? (
                        <div className="text-center text-slate-400">Loading team...</div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {teamMembers.map((member, idx) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setSelectedMember(member)}
                                    className="group relative overflow-hidden rounded-2xl glass-card hover:-translate-y-2 transition-all duration-300 border-transparent hover:border-gold/30 hover:shadow-gold/10 hover:shadow-2xl cursor-pointer"
                                >
                                    <div className="aspect-w-3 aspect-h-4 bg-navy-light h-64 w-full relative overflow-hidden">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="h-full w-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                                <span className="text-5xl text-white/10 font-bold font-heading group-hover:text-gold/20 transition-colors">{member.name.charAt(0)}</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
                                        {/* Click Hint Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">View Profile</span>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center absolute bottom-0 inset-x-0 pb-6 pt-12 bg-gradient-to-t from-navy to-transparent">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                                        <p className="text-xs font-bold text-accent-red uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Member Detail Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-navy-light border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/20 text-white rounded-full hover:bg-white/10 transition-colors"
                            >
                                <FaTimes />
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto bg-navy relative">
                                {selectedMember.image ? (
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-slate-800">
                                        <span className="text-6xl text-white/10 font-bold font-heading">{selectedMember.name.charAt(0)}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-light/80 via-transparent to-transparent md:hidden"></div>
                            </div>

                            {/* Info Side */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold font-heading text-white mb-2">{selectedMember.name}</h2>
                                <p className="text-accent-red font-bold uppercase tracking-widest text-sm mb-6">{selectedMember.role}</p>

                                <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                                    {selectedMember.bio || "Member of the Lighthouse Production team, contributing to excellence in web and game development."}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    {selectedMember.linkedin && (
                                        <a
                                            href={selectedMember.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 rounded-xl hover:bg-[#0077b5] hover:text-white transition-all font-bold text-sm"
                                        >
                                            <FaLinkedin size={18} /> LinkedIn
                                        </a>
                                    )}
                                    {selectedMember.github && (
                                        <a
                                            href={selectedMember.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold text-sm"
                                        >
                                            <FaGithub size={18} /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
