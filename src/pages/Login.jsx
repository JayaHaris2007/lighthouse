import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(email, password);
            toast.success('Logged in successfully!');
            navigate('/admin');
        } catch (error) {
            console.error(error);
            toast.error('Failed to log in. Check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-navy-light p-8 rounded-2xl border border-white/5 shadow-xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold font-heading text-white">Admin Login</h1>
                    <p className="text-slate-400 text-sm">Restricted access for Lighthouse team only.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-navy border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                placeholder="admin@lighthouse.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-navy border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gold text-navy font-bold py-3 rounded-lg hover:bg-gold-hover transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login to Dashboard'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
