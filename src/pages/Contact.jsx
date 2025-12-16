import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                createdAt: serverTimestamp()
            });
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error sending message: ", error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-8 md:p-12 rounded-[2.5rem]"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white drop-shadow-md">Get in <span className="text-gold">Touch</span></h1>
                        <p className="text-slate-400 font-serif italic">Have a Web or Game project in mind? Let's build something epic together.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide ml-4 group-focus-within:text-gold transition-colors">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-gold focus:bg-black/40 transition-all shadow-inner"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide ml-4 group-focus-within:text-gold transition-colors">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-gold focus:bg-black/40 transition-all shadow-inner"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide ml-4 group-focus-within:text-gold transition-colors">Message</label>
                            <textarea
                                required
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-black/20 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-gold focus:bg-black/40 transition-all resize-none shadow-inner"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-gold to-gold-hover text-navy font-bold py-4 rounded-full hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
                        >
                            {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
