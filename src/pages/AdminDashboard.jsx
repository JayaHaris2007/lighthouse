import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push({ id: doc.id, ...doc.data() });
            });
            setMessages(msgs);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-heading text-white">Dashboard</h1>
                    <div className="bg-navy-light px-4 py-2 rounded border border-white/10 text-slate-300">
                        Total Messages: <span className="text-gold font-bold">{messages.length}</span>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-slate-400">Loading messages...</div>
                ) : messages.length === 0 ? (
                    <div className="text-center py-20 text-slate-400 bg-navy-light rounded-xl border border-white/5">
                        No messages received yet.
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-navy-light p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{msg.name}</h3>
                                        <a href={`mailto:${msg.email}`} className="text-gold text-sm hover:underline">{msg.email}</a>
                                    </div>
                                    <span className="text-xs text-slate-500 bg-navy px-2 py-1 rounded">
                                        {msg.createdAt?.toDate().toLocaleString() || 'Just now'}
                                    </span>
                                </div>
                                <p className="text-slate-300 bg-navy/50 p-4 rounded-lg border border-white/5 text-sm leading-relaxed">
                                    {msg.message}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
