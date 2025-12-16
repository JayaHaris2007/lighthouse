import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-8 mt-auto">
                <div className="bg-navy-light/30 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">

                    {/* Decorative Top Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

                    <div className="text-center md:text-left z-10">
                        <h3 className="text-white text-3xl font-bold font-heading mb-2 uppercase tracking-wide drop-shadow-lg">Lighthouse</h3>
                        <p className="text-sm font-serif italic text-slate-400">Guiding Web Innovation. Powering Immersive Games.</p>
                    </div>

                    <div className="flex gap-6 z-10 bg-black/20 px-6 py-3 rounded-full border border-white/5">
                        <a href="#" className="text-slate-400 hover:text-gold transition-all transform hover:scale-110 hover:-translate-y-1 text-xl"><FaTwitter /></a>
                        <a href="#" className="text-slate-400 hover:text-accent-red transition-all transform hover:scale-110 hover:-translate-y-1 text-xl"><FaInstagram /></a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1 text-xl"><FaLinkedin /></a>
                        <a href="#" className="text-slate-400 hover:text-red-600 transition-all transform hover:scale-110 hover:-translate-y-1 text-xl"><FaYoutube /></a>
                    </div>

                    <div className="text-sm text-center md:text-right text-slate-500 z-10">
                        <p>&copy; {new Date().getFullYear()} Lighthouse Production.</p>
                        <p className="text-xs mt-1 font-medium tracking-wider text-gold/60 uppercase">Web Solutions & Game Development.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
