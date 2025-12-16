import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGamepad } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { currentUser, logout } = useAuth();

    // Handle scroll for sticky effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className={clsx(
                    'fixed z-50 transition-all duration-300 left-0 right-0 mx-auto',
                    scrolled ? 'top-4 w-[90%] md:w-[70%] lg:w-[60%] max-w-4xl' : 'top-6 w-[92%] md:w-[85%] lg:w-[75%] max-w-6xl'
                )}
            >
                <div className={clsx(
                    "rounded-full border border-white/10 px-6 py-3 flex justify-between items-center transition-all duration-300",
                    scrolled
                        ? 'bg-navy/80 backdrop-blur-xl shadow-2xl shadow-black/20'
                        : 'bg-navy-light/30 backdrop-blur-md shadow-lg'
                )}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="h-10 w-10 overflow-hidden rounded-full border border-gold/50 p-0.5 bg-navy-light group-hover:border-gold group-hover:scale-105 transition-all duration-500 shadow-lg">
                            <img src="/logo.png" alt="Lighthouse Logo" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <span className="text-xl font-bold font-heading text-white tracking-wide uppercase group-hover:text-gold transition-colors hidden sm:block">
                            Lighthouse
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 bg-black/20 rounded-full px-4 py-1.5 border border-white/5 ml-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden group',
                                    location.pathname === link.path
                                        ? 'text-navy bg-gold shadow-md shadow-gold/20'
                                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                                )}
                            >
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {currentUser ? (
                            <div className="flex items-center gap-3">
                                <Link to="/admin" className="hidden sm:block text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider">
                                    Admin
                                </Link>
                                <button
                                    onClick={logout}
                                    className="px-5 py-2 border border-accent-red/50 bg-accent-red/10 text-accent-red text-xs uppercase tracking-widest rounded-full hover:bg-accent-red hover:text-white transition-all font-bold shadow-lg shadow-accent-red/5 hover:shadow-accent-red/20"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            // Placeholder for consistent spacing if needed, or remove
                            <div className="w-0"></div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white text-xl p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay - Floating Card */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-4 mx-4 bg-navy/95 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-2xl shadow-2xl p-4 md:hidden"
                        >
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={clsx(
                                            'block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all',
                                            location.pathname === link.path
                                                ? 'bg-gold text-navy shadow-lg shadow-gold/20'
                                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                {currentUser && (
                                    <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-300 hover:bg-white/5 hover:text-white border-t border-white/5 mt-2">
                                        Admin Dashboard
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
