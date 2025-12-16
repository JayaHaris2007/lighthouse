import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "Neon Horizon",
            category: "Game Development",
            image: "https://placehold.co/600x400/0a192f/white?text=Neon+Horizon",
            tech: ["Unity", "C#", "HLSL"],
            desc: "A cyberpunk racing game featuring procedural track generation and high-fidelity graphics."
        },
        {
            title: "Apex Legends Tournament",
            category: "Esports Event",
            image: "https://placehold.co/600x400/0a192f/white?text=Apex+League",
            tech: ["Production", "Streaming", "Event Ops"],
            desc: "Organized and broadcasted a regional tournament with over 500 participants and 10k live viewers."
        },
        {
            title: "Echoes of the Void",
            category: "Cinematic Trailer",
            image: "https://placehold.co/600x400/0a192f/white?text=Echoes+Trailer",
            tech: ["Blender", "After Effects", "Premiere"],
            desc: "Full CGI trailer for an upcoming indie horror title, focusing on atmospheric storytelling."
        },
        {
            title: "GuildHub App",
            category: "Web Application",
            image: "https://placehold.co/600x400/0a192f/white?text=GuildHub",
            tech: ["React", "Firebase", "Tailwind"],
            desc: "Community management platform for MMORPG guilds with event scheduling and roster tools."
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Our Projects</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A showcase of our best work across development, esports, and production.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-navy-light rounded-xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all group"
                        >
                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                <img
                                    src={project.image}
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
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-gold bg-gold/10 px-2 py-1 rounded">#{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
