import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';

// Components (Placeholders until implemented)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';


function SplashScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-navy flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gold/30 p-1 bg-navy-light shadow-2xl shadow-gold/20 overflow-hidden">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-cover opacity-90" />
        </div>
        <h1 className="text-4xl text-gold font-heading font-bold tracking-widest uppercase">Lighthouse</h1>
        <p className="text-slate-400 text-sm mt-2 tracking-widest">EST. 2025</p>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AuthProvider>
        <AnimatePresence>
          {loading && <SplashScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        <div className="bg-navy text-white min-h-screen flex flex-col font-sans">
          <Toaster position="top-center" toastOptions={{
            style: {
              background: '#112240',
              color: '#ccd6f6',
            },
          }} />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
