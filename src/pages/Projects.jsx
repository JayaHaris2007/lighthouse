import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const projs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProjects(projs);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Our Projects</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A showcase of our best work across development, esports, and production.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-slate-400">Loading projects...</div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-navy-light rounded-xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all group"
                            >
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <img
                                        src={project.image || 'https://placehold.co/600x400/0a192f/white?text=Project'}
                                        alt={project.title}
                                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{project.title}</h3>
                                        <span className="text-xs font-medium px-2 py-1 bg-navy rounded text-slate-300 border border-white/10">{project.category}</span>
                                    </div>
                                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech && project.tech.map((t, i) => (
                                            <span key={i} className="text-xs text-gold bg-gold/10 px-2 py-1 rounded">#{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
